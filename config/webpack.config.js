var webpack = require('webpack');
var appConfig = require('./webpack.app.config.js');
var cssConfig = require('./webpack.css.config.js');

module.exports = [
  appConfig,
  cssConfig
];
