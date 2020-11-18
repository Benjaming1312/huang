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
const onScroll = require('./navbar.js')

$(function () {
  onScroll()
  index()
  aosInit()
  gotop()
})

// owlFn()

// $(function () {
//   es6()
// })
