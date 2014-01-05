var humane = require('humane-js')

var big = humane.create({
  clickToClose: true,
  timeout: 5000,
  baseCls: 'humane-jackedup'
})

var small = humane.create({
  clickToClose: true,
  timeout: 5000,
  baseCls: 'humane-libnotify'
})

big.info = big.spawn({ addnCls: 'humane-jackedup-info' })
big.success = big.spawn({ addnCls: 'humane-jackedup-success' })
big.error = big.spawn({ addnCls: 'humane-jackedup-error' })

small.info = small.spawn({ addnCls: 'humane-libnotify-info' })
small.success = small.spawn({ addnCls: 'humane-libnotify-success' })
small.error = small.spawn({ addnCls: 'humane-libnotify-error' })

exports.big = big
exports.small = small