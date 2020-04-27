const Writable = require('stream').Writable

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
    if (!(this.firstLine && this.skipFirstLine)) {
      this.firstLine = false
      this.fileBuilder.writeStreamInfo(incomingCsvLine, function (err, info) {
        if (err) {
          callback(err)
        } else {
          info.writeStream.write(info.transformer.transform(incomingCsvLine), function (err) {
            if (err) {
              callback(err)
            } else {
              info.count += 1
              callback()
            }
          })
        }
      })
    } else {
      // Skipped this first line
      this.firstLine = false
      callback()
    }
  }
}

module.exports = FileWriter
