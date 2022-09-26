/* eslint-disable @typescript-eslint/no-var-requires */
/* global module, require */

const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
	mode: "production",
	plugins: [new MiniCssExtractPlugin()],
})
