const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const paths = require("./paths");

const common = require("./webpack-common-config.js");

module.exports = merge(common, {
  entry: [paths.appIndexJs],
  mode: "development",
  devtool: "eval",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ],
  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx"]
  },
});