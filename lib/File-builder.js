'use strict'

const debug = require('debug')('smithereens')
const UNKNOWN_FILENAME = 'unknown'
const UNKNOWN_DIR = 'unknown'
const path = require('path')
const makeDir = require('make-dir')
const fs = require('fs')
const csvStringify = require('csv-string').stringify
const Transformer = require('./Transformer')
const upath = require('upath')
const _ = require('lodash')

class FileBuilder {
  constructor (options) {
    this.started = new Date()
    this.files = {}

    this.knownDirs = []
    this.outputDirRootPath = options.outputDirRootPath

    if (Object.prototype.hasOwnProperty.call(options, 'dirSplits')) {
      this.dirSplits = options.dirSplits
        .filter(dirSplit => dirSplit)
        .filter(dirSplit => Object.prototype.hasOwnProperty.call(dirSplit, 'columnIndex'))
        .map(dirSplit => columnIndexDirSplit(dirSplit.columnIndex, dirSplit.valueToDirMap || {}))
    }

    if (Object.prototype.hasOwnProperty.call(options.fileSplits, 'columnIndex')) {
      this.fileConfigFromCsvLine = columnIndexFileConfigFunction(options.fileSplits.columnIndex, options.fileSplits.valueToFileMap)
    }
  }

  dirPathFromCsvLine (incomingCsvLine) {
    if (!this.dirSplits) return '.'

    const dirParts = this.dirSplits.map(fn => fn(incomingCsvLine))
    const dirPath = './' + dirParts.join('/')
    return dirPath
  }

  writeStreamInfo (incomingCsvLine, callback) {
    const _this = this
    const dirPath = this.dirPathFromCsvLine(incomingCsvLine)
    const fileConfig = this.fileConfigFromCsvLine(incomingCsvLine)
    const key = dirPath + '/' + fileConfig.filename + '.csv'

    function createWriteStream () {
      const writeStream = fs.createWriteStream(path.resolve(_this.outputDirRootPath, key))
      const info = {
        writeStream: writeStream,
        transformer: new Transformer(fileConfig),
        dirPath: dirPath,
        filename: fileConfig.filename,
        count: 0
      }
      _this.files[key] = info
      const header = _.map(fileConfig.outputColumns, 'name')
      if (header.length > 0) {
        writeStream.write(csvStringify(header), function (err) {
          if (err) {
            callback(err)
          } else {
            debug(`Created writeStream '${key}' (${JSON.stringify(fileConfig)})`)
            callback(null, info)
          }
        })
      } else {
        callback(null, info)
      }
    }

    if (Object.prototype.hasOwnProperty.call(this.files, key)) {
      callback(null, this.files[key])
    } else {
      if (this.knownDirs.indexOf(dirPath) === -1) {
        // TODO: Good form to call callbacks inside promises?
        makeDir(path.resolve(this.outputDirRootPath, dirPath)).then(
          function () {
            _this.knownDirs.push(dirPath)
            createWriteStream()
          }
        ).catch(
          function (err) {
            callback(err)
          }
        )
      } else {
        createWriteStream()
      }
    }
  }

  close () {
    Object.values(this.files).forEach(file => file.writeStream.close())
  } // close

  manifest () {
    const manifest = {
      outputDirRootPath: this.outputDirRootPath,
      started: this.started,
      finished: new Date(),
      filenamePaths: {},
      counts: {
        totalFileCount: 0,
        totalLineCount: 0,
        byFilename: {},
        byDir: {},
        byFile: {}
      }
    }

    const filenamePaths = manifest.filenamePaths
    const counts = manifest.counts
    const byFilename = counts.byFilename
    const byDir = counts.byDir

    Object.values(this.files)
      .forEach(file => {
        counts.totalFileCount += 1
        counts.totalLineCount += file.count

        if (!Object.prototype.hasOwnProperty.call(byFilename, file.filename)) {
          byFilename[file.filename] = 0
        }
        byFilename[file.filename] += file.count
        const baseName = path.basename(file.dirPath)
        if (!Object.prototype.hasOwnProperty.call(byDir, baseName)) {
          byDir[baseName] = 0
        }
        byDir[baseName] += file.count

        const fullFilename = upath.join(file.dirPath, file.filename + '.csv')
        manifest.counts.byFile[fullFilename] = file.count

        if (!Object.prototype.hasOwnProperty.call(filenamePaths, file.filename)) {
          filenamePaths[file.filename] = []
        }
        filenamePaths[file.filename].push(fullFilename)
      }
    )

    return manifest
  } // manifest
} // class File-builder

function columnIndexDirSplit (columnIndex, valueToDirMap) {
  return function columnIndexDirSplit (line) {
    let value = line[columnIndex]
    if (Object.prototype.hasOwnProperty.call(valueToDirMap, value)) {
      value = valueToDirMap[value]
    } else if (Object.prototype.hasOwnProperty.call(valueToDirMap, '*')) {
      value = valueToDirMap['*']
    } else {
      value = UNKNOWN_DIR
    }
    return value
  }
} // columnIndexDirSplit

function columnIndexFileConfigFunction (columnIndex, valueToFileMap) {
  return function columnIndexFileInfo (line) {
    const value = line[columnIndex]
    const keys = Object.keys(valueToFileMap)
    const matchingKey = findMatchingKey(keys, value)

    if (matchingKey) {
      return valueToFileMap[matchingKey]
    } else if (Object.prototype.hasOwnProperty.call(valueToFileMap, '*')) {
      return valueToFileMap['*']
    } else {
      return { filename: UNKNOWN_FILENAME }
    }
  }
} // columnIndexFileConfigFunction

function findMatchingKey (keys, value) {
  for (const key of keys) {
    const splitKeys = key.split('&')
    for (const k of splitKeys) {
      if (k === value) {
        return key
      }
    }
  }
} // findMatchingKey

module.exports = FileBuilder
