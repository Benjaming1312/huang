const is = require('./is')

module.exports = function () {
  if (!is('.append-form')) {
    return
  }
  $('.module-form').appendTo($('.append-form'))
}