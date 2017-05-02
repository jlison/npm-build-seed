let path = require('path');
let express = require('express');
let webpack = require('webpack');
let webpackConfig = require('../webpack.config.js');

let Dashboard = require("webpack-dashboard");
let DashboardPlugin = require("webpack-dashboard/plugin");
let webpackDevMiddleware = require("webpack-dev-middleware");
let webpackHotMiddleware = require("webpack-hot-middleware");

const CONFIG = {
  PORT: 3000
};

let app = express();
let compiler = webpack(webpackConfig);

let dashboard = new Dashboard();
compiler.apply(new DashboardPlugin(dashboard.setData));

app.use(express.static('dist'));
app.use(webpackDevMiddleware(compiler, {
  // noInfo: true,
  // publicPath: webpackConfig.output.publicPath
}));

app.listen(CONFIG.PORT, "127.0.0.1", function(err) {
  if (err) return false, console.log("Error: %j", err);
  console.log(`Listening at http://localhost:${CONFIG.PORT}`);
});
