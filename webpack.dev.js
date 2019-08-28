const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = Object.assign(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    port: 8123
  },
  plugins: [
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify('dev')
   }),
   new webpack.HotModuleReplacementPlugin()
  ]
})