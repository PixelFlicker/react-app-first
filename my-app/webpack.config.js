/**
 * /webpack.config.js
 */

var webpack = require('webpack');
var isProduction = process.env.NODE_ENV == 'production';

var HtmlWebpackPlugin = require('html-webpack-plugin');

var plugins = [];

plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
}))

if (isProduction) {
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  entry: [
    './src/entry.js'
  ],

  output: {
    path: './public/',///home/proj/public/as
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: plugins,
  
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'], // ['babel-loader'] also works
      exclude: /node_modules/,
    }]
  },

  plugins: [new HtmlWebpackPlugin({
    title: 'My React App', // set a custom title
    template: 'index.template.html', // use our custom template
    inject: 'body' // inject our bundled script into the body
  })]
};
