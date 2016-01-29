var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: {
    'entry': './src/js/entry.js',
  },

  output: {
    path: path.join(__dirname, "docs"),
    filename: "js/bundle.js",
    libraryTarget: 'umd',
  },

  module: {
    loaders: [
      {
        test: /\.jade$/,
        loader: 'transform?envify!jade-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'transform?envify!babel',
        include: [
          path.resolve(__dirname, "components"),
          path.resolve(__dirname, "src/js"),
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader'),
        include: [
          path.resolve(__dirname, "src"),
        ],
      },
    ]
  },

  externals: {
    "Modernizr": "Modernizr",
  },

  plugins: [
    new StaticSiteGeneratorPlugin('js/bundle.js', 'index.html', {}),
  ]
}