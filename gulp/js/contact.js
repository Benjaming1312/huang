const is = require('./is')

function submit (data) {
  return new Promise(resolve => {
    PushToServer('CONTACTUS_DATA', data, null, function (res) {
      resolve(res)
    }, function (error) { console.error(error); })
  })
}

module.exports = function () {
  if (!is('#form')) {
    return
  }
  const app = new Vue({
    el: '#form',
    data: {
      name: 'test',
      date: '男',
      mail: 'teset@mail.com',
      phone: '123',
      textarea: '123123'
    },
    methods: {
      submit () {
        const data = {}
        data.Name = this.name
        data.Mobile = this.phone
        data.Email = this.mail
        data.Date = this.date
        data.Content = this.textarea
        submit(data)
          .then(rlt => {
            alert(rlt)
          })
      }
    }
  })
}