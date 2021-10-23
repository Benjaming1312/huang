const is = require('./is')

module.exports = function () {
  if (!is('.case-page')) {
    return
  }

  if (is('.module-rcglist')) {
    $('.module-rcglist').addClass('case')
  }

  if (is('.module-detail')) {
    $('.module-detail').addClass('case')
  }
  $('.figBS').attr({
    'data-aos': 'fade-up',
    'data-aos-duration': 1000
  })
}