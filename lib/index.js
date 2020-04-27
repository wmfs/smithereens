'use strict'

const debug = require('debug')('smithereens')
const path = require('path')
const glob = require('glob')
const fs = require('fs')
const csvParser = require('csv-streamify')
const FileBuilder = require('./File-builder')
const Writer = require('./Writer')
const jsonfile = require('jsonfile')
const pump = require('pump')

async function smithereens (sourceFilePaths, options) {
  // Turn sourceFilePaths to an array, if it's not already
  if (!Array.isArray(sourceFilePaths)) {
    sourceFilePaths = [sourceFilePaths]
  }

  debug('sourceFilePaths:' + JSON.stringify(sourceFilePaths, null, 2))
  debug('options:' + JSON.stringify(options, null, 2))

  const [manifest, outputDir] = await processFilePaths(sourceFilePaths, options)

  await jsonfile.writeFile(
    path.join(outputDir, 'manifest.json'),
    manifest,
    { spaces: 2 }
  )

  return manifest
} // smithereens

async function processFilePaths (sourceFilePaths, options) {
  const fileBuilder = new FileBuilder(options)

  for (const fileSource of sourceFilePaths) {
    const files = await expandLocation(fileSource)
    for (const file of files) {
      await processFile(file, fileBuilder, options)
    }
  }

  fileBuilder.close()
  return [
    fileBuilder.manifest(),
    fileBuilder.outputDirRootPath
  ]
}

function expandLocation (fileSource) {
  return new Promise((resolve, reject) => {
    glob(
      fileSource,
      { nodir: true },
      (err, files) => {
        if (err) return reject(err)
        resolve(files)
      }
    )
  })
} // expandLocation

function processFile (filePath, fileBuilder, options) {
  // Configure parser
  const parserOptions = options.parser
  parserOptions.objectMode = true
  parserOptions.columns = false

  debug(`Streaming files from ${filePath}`)

  const rs = fs.createReadStream(filePath)
  const parser = csvParser(parserOptions)
  const writer = new Writer(fileBuilder, options)

  return new Promise((resolve, reject) => {
    pump(
      rs,
      parser,
      writer,
      err => {
        if (err) return reject(err)
        resolve()
      }
    )
  })
} // processFile

module.exports = smithereens
