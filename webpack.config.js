var webpack = require('webpack');

module.exports = {
  entry: './lib/extension/main.js',
  output: {
    path: 'dist'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      },
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.png$/,
      loaders: ['url']
    }]
  }
};
