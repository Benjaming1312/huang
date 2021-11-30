const is = require('./is')

module.exports = function () {
  if (!is('.page-banner') || !is('.module-title')) {
    return
  }

  setTimeout(() => {
    const src = $('.page-banner .module-adv img').attr('src')
    $('.page-banner').attr(`style`, `background: url(${src})`)
    $('.page-banner .module-adv img').remove()
    $('.module-title').appendTo($('.page-banner'))
  }, 700);
}