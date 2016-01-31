require('dotenv').load();
var config = require('./webpack.config.js');

config.module.preLoaders = [
  {
    test: /\.jsx?$/,
    loader: 'eslint-loader',
    exclude: /node_modules/
  }
];

module.exports = config;
