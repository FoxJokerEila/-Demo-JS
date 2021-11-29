/**
 * xml文件解析
 * 获取 具体外观类的名字
 */
const xml2js = require('xml2js')
const fs = require('fs')
const src = (function () {
  const data = fs.readFileSync('../config.xml');
  const xmlParser = new xml2js.Parser()
  let tar = ''
  xmlParser.parseString(data, function (err, result) {
    const strings = result.config.className
    tar = strings[0]
  })
  return tar
})()

module.exports = {
  src: src
}

