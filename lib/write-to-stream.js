async function writeToStream(stream, output) {
  return new Promise((resolve, reject) => {
    stream.write(
      output,
      err => {
        if (err) return reject(err)
        resolve()
      }
    )
  })
} // writeToStream

module.exports = writeToStream
