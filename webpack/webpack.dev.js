const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");


module.exports = merge(common, {
  mode:'development',
  output:{
    filename: `uni-read-pages-bundle.js`,
    path: path.resolve(__dirname, '../','examples/common'),
  },
  devServer: {
    contentBase: "./examples/common"
  },
});
