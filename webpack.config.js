const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js',
    sass: './scss/style.scss',
    devServerHot: 'webpack/hot/dev-server',
    devServerClient: 'webpack-dev-server/client?http://localhost:3000/'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    compress: true,
    port: 3000,
    //hot: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /libs/,
          /lib/,
          /vendors/,
          /bower_components/
        ],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      {
        test: /\.pug$/,
        loaders: ['file-loader?name=[path][name].html', 'pug-html-loader?pretty&exports=false']
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // Use style-loader in development
          fallback: "style-loader"
        })
      }
    ],
  },
  plugins: [
    extractSass,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2
    })
  ]
};
