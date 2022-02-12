const is = require('../is')
module.exports = function () {
  if (!is('.idx.section-1')) {
    return
  }
  $('.idx.section-1 .owl-carousel').owlCarousel({
    items: 2,
		autoplay: true,
		nav: true,
		dots: false,
		loop: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoPlaySpeed: 6500,
		autoPlayTimeout: 1500,
		smartSpeed: 1500,
		autoplayHoverPause: false,
    margin: 15,
    navText: ['']
  })
}