const is = require('./is')
module.exports = function () {
  if (!is('.shop-list') && !is('.module-')) {
    return
  }

  collapsedAside()

  if (is('.product-banner')) {
    $('.product-banner').prependTo($('.module-cglist'))
  }

  $('.module-rcglist').appendTo($('.shop-list .append'))
  $('.module-cglist').appendTo($('.shop-list .append'))
  $('.module-ptlist').appendTo($('.shop-list .append'))
  $('.module-ecptdetail').appendTo($('.shop-list .append'))

  // const title = $('head title').text()
  // $('.module-title h4').text(title)

  // $('.d-img').each(function () {
  //   const src = $(this).find('img').attr('src')
  //   $(this).find('a').attr('style', `background: url(${src})`)
  // })

  if ($(window).width() < 769) {
    $('#pageptlist .d-item').each(function () {
      $(this).appendTo($('.row.listBS').eq(0))
    })
  }

  // $('.d-item').click(function () {
  //   const url = $(this).find('a').attr('href')
  //   window.location.href = url
  // })
}

function collapsedAside () {
  if (is('.shop-list')) {
    $('aside a').each(function () {
      const url = window.location.href
      const href = $(this).attr('href')
      const aTarget = $(this)
      const title = $('head title').text().trim()
      const isTarget = $(this).text().trim() === title && url.indexOf(href) >= 0
      // const isTarget = window.location.href.indexOf(aTarget.attr('href')) >= 0
      let removeCollpased
      if (isTarget) {
        aTarget.addClass('active')
        aTarget.parents().each(function () {
          const collapse = $(this).attr('class')
          if (collapse && collapse.indexOf('collapse') >= 0) {
            $(this).addClass('in')
            removeCollpased = $(this).attr('id')

            if (removeCollpased) {
              $(`aside a[href="#${removeCollpased}"]`).removeClass('collapsed')
            }
          }
        })
      }
    })
  }
}