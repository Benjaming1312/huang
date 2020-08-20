const is = require('../is')
module.exports = function () {
  if (!is('.module-rcglist')) {
    return
  }

  $('.module-rcglist .d-item .mdetail').click(function () {
    const href = $(this).parent('.d-txt').find('h5 a').attr('href')
    window.location.href = href
  })
}