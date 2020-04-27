const Writable = require('stream').Writable
const writeToStream = require('./write-to-stream')

class FileWriter extends Writable {
  constructor (fileBuilder, options) {
    super({ objectMode: true })
    this.fileBuilder = fileBuilder

    if (Object.prototype.hasOwnProperty.call(options, 'parser') && Object.prototype.hasOwnProperty.call(options.parser, 'skipFirstLine')) {
      this.skipFirstLine = options.parser.skipFirstLine
    } else {
      this.skipFirstLine = false
    }

    this.firstLine = true
  }

  _write (incomingCsvLine, encoding, callback) {
    this.doWrite(incomingCsvLine)
      .then(() => callback())
      .catch(err => callback(err))
  }

  async doWrite (incomingCsvLine) {
    if (!(this.firstLine && this.skipFirstLine)) {
      this.firstLine = false

      const info = await this.fileBuilder.findStreamInfo(incomingCsvLine)
      await writeToStream(
        info.writeStream,
        info.transformer.transform(incomingCsvLine)
      )
      info.count += 1
    } else {
      // Skipped this first line
      this.firstLine = false
    }
  } // _write
} // FileWriter

module.exports = FileWriter
