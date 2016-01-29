var webpack = require('webpack');
var path = require('path');

var config = {
  entry: [
    path.resolve(__dirname, 'src/components/index.jsx'),
  ],

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
          path.resolve(__dirname, "src/js"),
        ],
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};

module.exports = config;
