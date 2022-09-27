/* eslint-disable @typescript-eslint/no-var-requires */
/* global module, require, __dirname */

const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	entry: {
		shared: ["react-hot-loader/patch"],
		index: {
			import: "./src/index.tsx",
			dependOn: "shared"
		},
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[hash].js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: "url-loader",
						options: {
							mimetype: "image/png",
						},
					},
				],
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.svg$/,
				use: "file-loader",
			},
			{
				test: /\.ts(x)?$/,
				use: [
					{ loader: "ts-loader" },
				],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			templateContent: "./src/index.html",
			filename: "index.html",
			chunks: ["index", "hot_loader_patch"],
		}),
		new LodashModuleReplacementPlugin(),
	],
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"react-dom": "@hot-loader/react-dom",
		},
	},
}
