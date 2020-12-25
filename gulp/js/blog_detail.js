const is = require('./is')

module.exports = function () {
  if (is('.idx')) {
    return
  }

  if (is('.module-ecptdetail')) {
    return
  }

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

  // Type 2
  if (is('.blog-news')) {
    $('.module-detail').addClass('type-2')
  }
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
    $('.mcarousel.vert .figBS').each(function () {
      // $(this).find('.figBS').appendTo('.mcont')
      $(this).appendTo('.mcont')
    })
    $('.mpgdetail').appendTo('.mcont')
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