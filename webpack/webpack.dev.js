const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: `uni-read-pages-bundle.js`,
    path: path.resolve(__dirname, '../', 'examples/common'),
  },
  devServer: {
    contentBase: "./examples/common"
  },
  plugins: [
    new CopyPlugin([{
      context: './src/',
      force: true,
      from: './index.js',
      to: `uni-read-pages-bundle.js`,
      globOptions: {
        copyUnmodified: true
      }
    }]),
  ]
});