//webpack.config.js
var webpack = require("webpack");

module.exports = {
  context: __dirname + '/public/javascripts',
  entry: {
    'main': './main.js',
    'join': './join.js',
    'card': './card.js',
    'card-list': './card-list.js',
    'card-edit': './card-edit.js',
    'login':'./login.js',
  },
  output: {
    filename: './dist/[name].bundle.js'
  },
  devtool: '#inline-source-map'
};