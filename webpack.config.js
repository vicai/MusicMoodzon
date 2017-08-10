var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '', '.svg', '.jpeg', '.jpg', '.png']
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      API: process.ENV === 'dev' ? 'localhost:3000' : 'api.amazon.com'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?localIdentName=freebee-[name]-[local]', 'postcss', 'sass'],
        include: path.join(__dirname, 'src')
      },
    ]
  },
  postcss: [autoprefixer],
};
