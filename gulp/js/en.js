const readCookie = require('./readCookie/index.js')
module.exports = function () {
  const lang = readCookie('PageLang')
  if (lang === 'en') {
    $('body').addClass('en-page')
  }
  if (lang === 'zh-cn') {
    $('body').addClass('cn-page')
  }
}