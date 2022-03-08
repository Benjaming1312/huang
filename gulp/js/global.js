const is = require('./is')

module.exports = function () {
  if (!is('.global')) {
    return
  }
  $('.owl-carousel').owlCarousel({
		items: 1,
		autoplay: true,
		nav: true,
		dots: false,
		loop: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoPlaySpeed: 6500,
		autoPlayTimeout: 1500,
		// smartSpeed: 1500,
		autoplayHoverPause: false,
		navText: ['']
	})
}