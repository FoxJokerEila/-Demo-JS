/**
 * new 的文件加密解密器
 */

const CryptoJS = require('crypto-js')

class CipherMachine {
  encrypt(plainText) {
    console.log('Base64加密中......');
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(plainText))
  }
  decrypt(encryptStr) {
    console.log('Base64解密中......');
    let plainText = CryptoJS.enc.Base64.parse(encryptStr).toString(CryptoJS.enc.Utf8)
    return plainText
  }
}

module.exports = CipherMachine

