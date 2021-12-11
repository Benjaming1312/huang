const is = require('./is')

module.exports = function () {
  if (!is('.news_title')) {
    return
  }

  $('.news_title').prependTo($('#pageptlist'))
}