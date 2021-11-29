/**
 * 读文件
 */

const fs = require('fs')

class FileReader {
  read(fileNameSrc) {
    let con = ''
    con = fs.readFileSync(fileNameSrc)
    console.log('读文件：' + con.toString());
    return con.toString()
  }
}

module.exports = FileReader
