import path from 'path';
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/js/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: /app\/js/,
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style-loader!css-loader!sass-loader!sasslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(eot|ttf|woff|woff2|data:application).*$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg).*$/,
        loader: 'url-loader?limit=10000',
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'app/index.html', to: 'index.html' }
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 2222,
    compress: true
  },
  devtool: "inline-source-map"
};
