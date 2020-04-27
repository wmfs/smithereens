'use strict'

const csvStringify = require('csv-string').stringify
const hashFunction = require('./hash-function')
const uuidFunction = require('./uuid-function')

class Transformer {
  constructor (fileConfig) {
    if (Object.prototype.hasOwnProperty.call(fileConfig, 'outputColumns')) {
      this.columnFunctions = fileConfig.outputColumns.map(columnConfig => makeColumnFunction(columnConfig))
    }
  }

  transform (incomingCsvLine) {
    if (this.columnFunctions) {
      const values = this.columnFunctions.map(fn => fn(incomingCsvLine))

      return csvStringify(values)
    } else {
      return csvStringify(incomingCsvLine)
    }
  }
}

function makeColumnFunction (outputColumnConfig) {
  const outputColumnType = outputColumnConfig.type || 'columnIndex'

  switch (outputColumnType) {
    case 'columnIndex':
      return columnIndexOutput(outputColumnConfig.columnIndex)
    case 'hash':
      return hashFunction
    case 'uuid':
      return uuidFunction
    case 'constant':
      return constantFn(outputColumnConfig.value)
    default:
      console.error('ERROR: Unknown outputColumnType ' + outputColumnType)
  }
} // makeColumnFunction

function columnIndexOutput (columnIndex) {
  return (incomingCsvLine) => incomingCsvLine[columnIndex]
} // columnIndexOutput

function constantFn (value) {
  return () => value
} // constantFn

module.exports = Transformer
