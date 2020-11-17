module.exports = function () {
  setTimeout(() => {
    $('body').fadeIn()

    setTimeout(() => {
      AOS.init({
        once: true,
        duration: 1200
      })
    })
  }, 1000);
}