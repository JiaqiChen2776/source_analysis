const webpack = require('webpack')
const config = require('./webpack.config')

const complier = webpack(config)
complier.run((err, stat) => {
  if (err) throw err
  console.log(stat.toString({
    colors: true
  }))
})