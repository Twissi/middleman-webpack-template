var Clean = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  // tell webpack the entry point for the bundle (absolute path)
  // https://webpack.js.org/concepts/entry-points/
  entry: './source/javascripts/site.js',

  // tell webpack how to write the compiled files to disk
  // https://webpack.js.org/concepts/output/
  output: {
    filename: 'assets/javascripts/site.bundle.js',
    path: __dirname + '/.tmp/dist'
  },

  // tell webpack what directories should be searched when resolving modules
  // https://webpack.js.org/configuration/resolve/#resolve-modules
  resolve: {
    modules: [
      __dirname + '/source/javascript',
      __dirname + '/node_modules',
    ],
    extensions: ['.js']
  },

  // tell webpack which rules are applied for each module
  // loaders preprocess files when they are loaded
  // https://webpack.js.org/configuration/module/#module-rules
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
  },

  // webpack plugins
  // https://webpack.js.org/configuration/plugins/#plugins
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new Clean(['.tmp']),
  ]
};
