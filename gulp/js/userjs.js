// $(function () {
//     // owlcarouselfn('.banner .row .col-xs-12', false, true)
// })
// $('test').click((e) => {
//     return e ? true : false
// })
// import owl from 'owlCarousel.js'
// const owlFn = require('./owlCarousel')
const aosInit = require('./aos')
const gotop = require('./scrollTo')
const index = require('./index/index.js')
const navbar = require('./navbar.js')
const mshop_title = require('./append_title')
const case_page = require('./case')
// const product_list = require('./product-list.js')
const product_detail = require('./product-detail.js')
const page_banner = require('./page_banner')
const append_form = require('./append_form')
// const about = require('./aboutus.js')
// const mshop = require('./mshop.js')
// const same_as_news = require('./same_as_news.js')
// const blog_detail = require('./blog_detail.js')
// const collapseAside = require('./collapseAside.js')

$('body').hide()
$(document).ready(function () {
  setTimeout(() => {
    navbar()
    gotop()
    page_banner()
    append_form()
    // index()
    // product_list()
    // case_page()
    // product_detail()
    // mshop_title()
    // about()
    // same_as_news()
    // collapseAside()

  }, 100)
  setTimeout(() => {
    $('body').show()
    aosInit()
  }, 1100)
})

// owlFn()

// $(function () {
//   es6()
// })
