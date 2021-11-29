/**
 * 文件加密解密器
 */

const CryptoJS = require('crypto-js')
const MY_KEY = 'snowt_key2235'

class CipherMachine {
  encrypt(plainText) {
    console.log('AES加密中......');
    return CryptoJS.AES.encrypt(plainText, MY_KEY).toString()
  }
  decrypt(encryptStr) {
    console.log('AES解密中......');
    let bytes = CryptoJS.AES.decrypt(encryptStr, MY_KEY)
    let plainText = bytes.toString(CryptoJS.enc.Utf8)
    return plainText
  }
}

module.exports = CipherMachine

