const is = require('./is')

module.exports = function () {
  if (!is('.news_title')) {
    return
  }

  $('.news_title').prependTo($('#pageptlist'))

  $('#pageptlist .d-item').click(function () {
    const url = $(this).find('a').attr('href')
    window.location.href = url
  })
}