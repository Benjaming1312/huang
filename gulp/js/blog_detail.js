const is = require('./is')

module.exports = function () {
  if (!is('.figBS')) {
    $('.module-misc').remove()
    return
  }
  else {
    appendMisc()
  }

  $('.mpgtitle').show()
  $('.module-detail').addClass('blog_detail')


  if ($('window').width() < 768) {
    appendOwlItem()
  }

  assignAOS()
}

function assignAOS () {
  const dur = 1000
  $('.figBS').attr('data-aos', 'fade-up')
  $('.figBS').attr('data-aos-duration', dur)
}

function appendOwlItem () {
  if (!is('.owl-item')) {
    setTimeout(() => {
      appendOwlItem()
    }, 100)
  }
  else {
    $('.owl-item').each(function () {
      $(this).find('.figBS').prependTo('.mcont')
    })
  }
}

function appendMisc () {
  if (!is('.module-misc')) {
    setTimeout(() => {
      appendMisc()
    }, 100)
  }
  else {
    $('.module-misc').appendTo('.mpgtitle')
  }
}