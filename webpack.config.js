var webpack = require('webpack');
var path = require('path');

var config = {
  entry: [path.resolve(__dirname, 'src/components/index.jsx')],

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  module : {
    loaders : [
      {
        test: /\.jsx?$/,
        loader: 'transform?envify!babel',
        include: [
          path.resolve(__dirname, "src/components"),
        ],
      }
    ],
    preLoaders : [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [new RegExp(path.join(__dirname, 'src'))]
      }
    ]
  }
};

module.exports = config;
