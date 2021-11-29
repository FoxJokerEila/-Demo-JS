/**
 * 客户端
 * 文件加密
 */
const src = require('../utils/xmlParser.js').src
const EncryptFacade = require(src)
function client() {
  console.log('/*文件开始加密*/');
  const ef = new EncryptFacade();
  ef.fileEncrypt('../files/源文件.txt', '../files/加密结果.txt')
}

client();
