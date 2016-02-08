var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: {
    'docs': path.resolve(__dirname, 'docs/entry.js'),
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '/assets/[name].js'
  },

  module : {
    loaders : [
      {
        test: /\.jsx?$/,
        loader: 'transform?envify!babel',
        include: [
          path.resolve(__dirname, "docs"),
          path.resolve(__dirname, "src/components"),
          path.resolve(__dirname, "src/js"),
        ],
      },
      {
        test: /\.jade$/,
        loader: 'react-hot!jade-react',
        include: [
          path.resolve(__dirname, "docs"),
          path.resolve(__dirname, "src"),
        ],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]!sass')
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./docs"),
      path.resolve(__dirname, "./components"),
    ],
  },
  plugins: [
    new ExtractTextPlugin("assets/[name].css"),
    new HtmlWebpackPlugin({
      template: 'html!./docs/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true,
    stats: {
      chunkModules: false,
      colors: true,
    }
  }
};

module.exports = config;
