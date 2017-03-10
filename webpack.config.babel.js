var path =  require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/js/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            'react',
            ['es2015', {
              "modules": false
            }],
          ],
        },
        include: /app\/js/,
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
          {loader: 'sasslint-loader'}
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(eot|ttf|woff|woff2|data:application).*$/,
        use: 'file-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg).*$/,
        use: 'url-loader?limit=10000',
      }
    ],
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
