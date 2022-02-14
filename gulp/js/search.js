module.exports = function () {
  if ($(window).width() > 768) {
    $('.search .btn').click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).parents('.input-group').toggleClass('active')
    })
  }
}