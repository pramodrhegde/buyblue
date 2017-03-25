const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/js/index.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
    publicPath: './dist/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    },
    {
      test: /\.scss$/,
      loader: "style-loader!css-loader!sass-loader"
    }
  ]
  }
};
