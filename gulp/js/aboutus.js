const is = require('./is')

module.exports = function () {
  if (!is('.page.aboutus')) {
    return
  }

  
  const url = window.location.href
  const target = window.location.href.split('#')[1]

  if (target) {
    setTimeout(() => {
      scrollTo(target)
    }, 1000);
  }

  $('.aboutus-dropdown a').each(function () {
    console.log('%c (／‵Д′)／~ ╧╧ click : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff')
    $(this).click(function (e) {
      e.preventDefault()
      e.stopPropagation()
      if ($(window).width() < 768) {
        $('.navbar-toggle').click()
      }

      const clickHref = $(this).attr('href').split('#')[1]
      scrollTo(clickHref)
    })
  })

  // $('.page.story .owl-carousel').owlCarousel({
  //   items: 1,
  //   autoplay:true,
  //   nav: false,
  //   dots: true,
  //   loop: true,
  //   animateOut: 'fadeOut',
  //   animateIn: 'fadeIn',
  //   autoPlaySpeed: 5000,
  //   autoPlayTimeout: 1500,
  //   smartSpeed: 1500,
  //   navText: [''],
  //   autoplayHoverPause: true
  // })
}

function scrollTo (target) {
  const top = $(`#${target}`).offset().top
  const navH = $('.navbar').innerHeight()
  const section1H = target === $(window).width() < 768 ? 30 : 130
  $('html, body').stop().animate({
    scrollTop: top - navH - section1H
  }, 1000)
}