const is = require('./is')

module.exports = function () {
  if (!is('.page-banner') || !is('.module-title')) {
    return
  }

  setTimeout(() => {
    genBannerStyle()
    // $('.page-banner .module-adv img').remove()
    $('.module-title').appendTo($('.page-banner'))
  }, 700);
}


function genBannerStyle () {
  const height = $('.page-banner .module-adv img').height()
  const src = $('.page-banner .module-adv img').attr('src')
  if (!height || !src) {
    setTimeout(() => {
      genBannerStyle()
    }, 500);
  }
  else {
    $('.page-banner').attr(`style`, `background: url(${src}); height: ${height}px`)
  }
}