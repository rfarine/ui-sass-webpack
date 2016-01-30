var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var config = {
  entry: {
    'entry': path.resolve(__dirname, 'src/components/entry.js'),
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
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
      },
      {
        test: /\.jade$/, 
        loader: 'react-hot!jade-react', 
        include: [
          path.resolve('src'),
        ],
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./components"),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'html!./src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: {
      chunkModules: false,
      colors: true,
    }
  }
};

module.exports = config;
