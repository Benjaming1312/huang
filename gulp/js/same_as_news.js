const is = require('./is')

module.exports = function () {
  if (!is('.same_as_news')) {
    return
  }
  console.log('%c (／‵Д′)／~ ╧╧ same as news : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff')

  assignAOS()

  $('.module-rcglist').addClass('same_as_news')
  $('.d-item').each(function () {
    const url = $(this).find('.d-img a').attr('href')
    $(this).find('.d-txt').append(`<p class="readmore"><a href="${url}">READ MORE<span class="svg" style="background:url(/images/readmore.svg);"></span></a></p>`)
  })
}

function assignAOS () {
  const dur = 1000
  $('.d-item').attr('data-aos', 'fade-up')
  $('.d-item').attr('data-aos-duration', dur)
}