module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: require('path').join(__dirname, '/public'),
    publicPath: '/public',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
