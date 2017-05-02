const path = require('path');
const webpack = require('webpack');
const Dashboard = require('webpack-dashboard/plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const nodeExternals = require('webpack-node-externals');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
// });

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js',
    // devServerHot: 'webpack/hot/dev-server',
    // devServerClient: 'webpack-dev-server/client?http://localhost:3000/'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, './dist'),
    port: 3000,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  // target: 'node',
  // // externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          // /node_modules/,
          /vendors/,
          /bower_components/
        ],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ],
  },
  plugins: [
    // extractSass,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
    new DashboardPlugin({ port: 3000 }),
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, 'node_modules')
    ])
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons',
    //   filename: 'commons.js',
    //   minChunks: 2
    // })
  ]
};
