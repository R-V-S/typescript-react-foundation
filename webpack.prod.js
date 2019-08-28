const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = Object.assign(common, {
  devtool: 'none',
  plugins: [
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
   })
  ]
})