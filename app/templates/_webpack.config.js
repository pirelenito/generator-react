module.exports = {
  context: __dirname + '/app',
  entry: './<%= slug %>.jsx',

  output: {
    path: __dirname + '/dist',
    filename: '<%= slug %>.js',
    libraryTarget: 'amd',
    library: '<%= libname %>'
  },

  externals: ['react'],

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  }
};
