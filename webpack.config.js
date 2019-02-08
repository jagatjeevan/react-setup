const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
    main: path.resolve(__dirname, 'app/js/index'),
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index-[hash].js',
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2017', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          allChunks: false,
        }),
      },
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Promotion Advisor',
      template: path.resolve(__dirname, 'app/index.template.html'),
    }),

    new ExtractTextPlugin('styles.css'),

    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'app/assets/favicon'), to: path.resolve(__dirname, 'build/favicon') },
      { from: path.resolve(__dirname, 'app/assets/locale'), to: path.resolve(__dirname, 'build/locale') },
    ]),

    new webpack.optimize.ModuleConcatenationPlugin(),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 2222,
  },
};

module.exports = config;
