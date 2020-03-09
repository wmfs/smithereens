const { v4: uuidV4 } = require('uuid')

module.exports = function uuidFunction () {
  return uuidV4()
}
