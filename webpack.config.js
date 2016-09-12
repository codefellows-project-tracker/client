const path = require('path');

const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: 'build/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', ['css', 'postcss', 'sass']),
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.json/,
        loader: 'json',
      },
      {
        test: /\.(woff|svg|eot|ttf).*/,
        loader: 'url?limit=10000',
      },
    ],
  },
  postcss() {
    return [autoprefixer];
  },
  plugins: [
    new ExtractText('bundle.css'),
    new webpack.DefinePlugin({ __API_URL__: JSON.stringify('http://localhost:3000') }),
  ],
  devServer: {
    inline: true,
    port: 3141,
  },
};
