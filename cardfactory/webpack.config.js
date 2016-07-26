//webpack.config.js
module.exports = {
  context: __dirname + '/public/javascripts',
  entry: {
    main: './main.js',
    join: './join.js',
    'card-edit': './card-edit.js'
  },
  output: {
    filename: './dist/[name].bundle.js'
  },
  devtool: '#inline-source-map'
};