const is = require('./is')
module.exports = function () {
  const navHeight = calcNavHeight()
  $(window).on('scroll', function () {
    const top = $(window).scrollTop()
    if (top > navHeight) {
      $('nav.navbar').addClass('scroll')
    }
    else {
      if (is('.scroll')) {
        $('nav.navbar').removeClass('scroll')
      }
    }
  })
}

function calcNavHeight () {
  return $('nav.navbar').innerHeight()
}