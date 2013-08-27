module.exports = function () {
  app.get('/privacy', function (req, res) {
    res.render('privacy', {
      url: '/privacy',
      title: 'Privacy Policy',
      hero: {
        title: 'Privacy Policy',
        desc: 'i.e. excellent bedtime reading!'
      }
    })
  })
}