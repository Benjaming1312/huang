const is = require('./is')

module.exports = function () {
  if (!is('.news-detail')) {
    return
  }
  const id = window.location.search.split('id=')[1]
  getData(id).then(data => {
    console.log('%c (／‵Д′)／~ ╧╧ data : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', data)
    const app = new Vue({
      el: '#insert_data',
      data: {
        data: data
      }
    })
  })
}

function getData (id) {
  return new Promise(resolve => {
    console.log('%c (／‵Д′)／~ ╧╧ id : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', id)
    GetDataById('NEWS', id, function (data) {
      resolve(data)
    }, function (error) { console.error(error); })
  })
}