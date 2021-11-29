/**
 * 写文件
 */

const fs = require('fs')

class FileWriter {
  write(encryptStr, fileNameDes) {
    fs.writeFile(fileNameDes, encryptStr, (err) => {
      console.log('写文件：' + encryptStr);
      if (err) {
        console.log(err);
      }
    })
  }
}

module.exports = FileWriter;
