const is = require('../is')

module.exports = function () {
  if (!is('.module-special')) {
    return
  }

  $('.module-special .d-item').each(function () {
    const href = $(this).find('a').attr('href')
    $(this).find('.news-info').append(`<p class="more"><a href="${href}">READ MORES>></a></p>`)
  })
}