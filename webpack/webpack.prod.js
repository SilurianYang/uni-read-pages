const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const rimraf = require("rimraf");

rimraf("dist",()=>{});

module.exports = merge(common, {
  mode: "production",
});
