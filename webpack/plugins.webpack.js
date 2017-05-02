module.exports = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: 2,
    filename: 'vendor-[hash].js',
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  })
];
