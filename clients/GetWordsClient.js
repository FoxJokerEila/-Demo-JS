/**
 * 文件解密
 */
const src = require('../utils/xmlParser.js').src
const EncryptFacade = require(src)

function client() {
  console.log('/*文件开始解密*/');
  const ef = new EncryptFacade();
  ef.fileDecrypt('../files/加密结果.txt', '../files/解密结果.txt')
}

client();
