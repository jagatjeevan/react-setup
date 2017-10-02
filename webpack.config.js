var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
    main: path.resolve(__dirname, 'app/js/index') ,
    vendor: [
      'react',
      'react-dom',
      'react-router-dom'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index-[hash].js'
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2017', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          allChunks: false,
        }),
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Promotion Advisor',
      template: path.resolve(__dirname, 'app/index.template.html')
    }),

    new ExtractTextPlugin("styles.css"),

    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'app/assets/favicon'), to: path.resolve(__dirname, 'build/favicon') },
      { from: path.resolve(__dirname, 'app/assets/locale'), to: path.resolve(__dirname, 'build/locale') }
    ]),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js',
      minChunks: Infinity
    }),

    new webpack.optimize.ModuleConcatenationPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 2222
  }
};

module.exports = config;
