// $(function () {
//     // owlcarouselfn('.banner .row .col-xs-12', false, true)
// })
// $('test').click((e) => {
//     return e ? true : false
// })
// import owl from 'owlCarousel.js'
// const owlFn = require('./owlCarousel')

const form = require('./contact')
const news = require('./news')
const news_detail = require('./newsDetail')
const global = require('./global')
const nav_tabs = require('./nav_tabs')
const idx = require('./index/index')
const aosInit = require('./aos')
const gotop = require('./scrollTo')
const index = require('./index/index.js')
const navbar = require('./navbar.js')
const mshop_title = require('./append_title')
const case_page = require('./case')
const product_list = require('./product-list.js')
const product_detail = require('./product_detail.js')
const page_banner = require('./page_banner')
const append_form = require('./append_form')
const append_news = require('./append_news')
const aboutus = require('./aboutus')
const search = require('./search')
const owl = require('./owlCarousel')
// const about = require('./aboutus.js')
// const mshop = require('./mshop.js')
// const same_as_news = require('./same_as_news.js')
// const blog_detail = require('./blog_detail.js')
// const collapseAside = require('./collapseAside.js')

$('body').hide()
$(document).ready(function () {
  setTimeout(() => {
    navbar()
    owl()
    nav_tabs()
    global()
    news()
    news_detail()
    form()
    // gotop()
    // idx()
    // search()
    // product_list()
    // product_detail()
    // page_banner()
    // append_form()
    // append_news()
    // product_detail()
    // aboutus()
    // index()
    // product_list()
    // case_page()
    // mshop_title()
    // about()
    // same_as_news()
    // collapseAside()

  }, 100)
  setTimeout(() => {
    $('body').show()
    aosInit()
  }, 100)
})

// owlFn()

// $(function () {
//   es6()
// })
