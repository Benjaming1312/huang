const is = require('./is')

module.exports = function () {
  const exceptList = [
    '.module-login',
    '.module-forgetpsw',
    '.module-register',
    '.module-memmenu',
    '.module-changepwd',
    '.module-viewcart',
    '.module-formlist',
    '.module-orderlist',
    '.module-consignee.module-consignee',
    '.module-billto',
    '.module-submitorder',
    '.module-',
    '.md_middle',
    '.module-favlist'
  ]
  if (!exceptList.some((name => is(name)))) {
    return
  }
  $('.mt').prepend(`<span class="svg" style="background:url(/ezfiles/905/1905/img/2528/title-l.svg); width: 34px; height: 87px;"></span>`)
  $('.mt').prepend(`<span class="line"></span>`)
  $('.mt').append(`<span class="svg" style="background:url(/ezfiles/905/1905/img/2528/title-r.svg); width: 34px; height: 87px;"></span>`)
  $('.mt').append(`<span class="line"></span>`)


  $('.mpgtitle').prepend(`<span class="svg" style="background:url(/ezfiles/905/1905/img/2528/title-l.svg); width: 34px; height: 87px;"></span>`)
  $('.mpgtitle').prepend(`<span class="line"></span>`)
  $('.mpgtitle').append(`<span class="svg" style="background:url(/ezfiles/905/1905/img/2528/title-r.svg); width: 34px; height: 87px;"></span>`)
  $('.mpgtitle').append(`<span class="line"></span>`)

  const ori_text = $('.module-viewcart h3').text()
  $('.module-viewcart h3').text(ori_text.split('(')[0].trim())
}