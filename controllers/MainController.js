const parse = require('co-busboy')
const fs = require('fs')
const path = require('path')
const os = require('os')

module.exports = {
  index: function *(next) {
    this.body = 'yo'
  },
  upload: function *(next) {
    const parts = parse(this)
    let part
    while (part = yield parts) {
      let stream = fs.createWriteStream(`./uploads/${Math.random().toString()}.jpg`)
      part.pipe(stream)
      console.log('uploading')
    }
    this.redirect('/')
  }
}
