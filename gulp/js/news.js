const is = require('./is')

module.exports = function () {
  if (!is('.news-list')) {
    return
  }
  getData().then(data => {
    console.log('%c (／‵Д′)／~ ╧╧ Vue : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', data)
    const app = new Vue({
      el: '#insert_data',
      data: {
        data: data
      }
    })
  })
}

function getData () {
  return new Promise(resolve => {
    GetAllDatas("NEWS", function (datas) {
      if (datas != null) {
          // alert(datas.length);
          resolve(datas)
      } else {
          alert('沒有資料');
      }
      }, function (error) {
          alert(error);
      })
  })
}