/* eslint-disable @typescript-eslint/no-var-requires */
/* global module, require */

const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
})
