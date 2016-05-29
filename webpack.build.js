var config = require('./webpack.config.js')

config.entry = {
  'vuejs-paginator': './src/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'VuePaginator',
  libraryTarget: 'umd'
}


module.exports = config
