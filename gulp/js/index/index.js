const is = require('../is')
module.exports = function () {
  $('.hdmenu .nav.navbar-nav').appendTo($('.user-append'))
  $('.hdmenu').hide()

  if ($(window).width() < 768) {
    $('.member .formBS').appendTo($('nav.navbar'))

  }
  if (is('.idx')) {
    $('.idx .owl-carousel').owlCarousel({
      items: 1,
      autoplay: true,
      nav: false,
      dots: true,
      loop: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoPlaySpeed: 6500,
      autoPlayTimeout: 6500,
      smartSpeed: 1500,
      autoplayHoverPause: false
    })
  }
}