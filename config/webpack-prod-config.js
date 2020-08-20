const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const paths = require("./paths");
const common = require("./webpack-common-config.js");

module.exports = merge(common, {
  entry: {
    app: paths.appIndexJs
  },
  mode: "production",
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  output: {
    filename: "[chunkhash]_[name].js",
    path: paths.appBuild,
    publicPath: "/react-star-picker/" // use when deploying to github pages: needs project name in url
    // publicPath: "/" // use to serve prod-build locally
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new ExtractTextPlugin("styles.css")
  ],
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx"]
  },  
  // customize optimization if necessary:
  // optimization: {
  //   splitChunks: {
  //      ...    
  //   },
  //   runtimeChunk: true
  // }
});