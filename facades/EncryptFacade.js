/**
 * 一个外观类
 */

const FileReader = require('../components/FileReader.js')
const CipherMachine = require('../components/CipherMachine.js')
const FileWriter = require('../components/FileWriter.js')

class EncryptFacade {
  constructor() {
    this.reader = new FileReader();
    this.cipher = new CipherMachine();
    this.writer = new FileWriter();
  }

  fileEncrypt(fileNameSrc, fileNameDes) {
    console.log('/*使用外观类进行加密*/');
    const plainStr = this.reader.read(fileNameSrc)
    const encryptStr = this.cipher.encrypt(plainStr)
    this.writer.write(encryptStr, fileNameDes)
    setTimeout(() => console.log('/*外观类加密完成*/'), 40)

  }

  fileDecrypt(fileNameSrc, fileNameDes) {
    console.log('/*使用外观类进行解密*/');
    let encryptStr = this.reader.read(fileNameSrc)
    let plainStr = this.cipher.decrypt(encryptStr)
    this.writer.write(plainStr, fileNameDes)
    setTimeout(() => console.log('/*外观类解密完成*/'), 40)
  }
}

module.exports = EncryptFacade
