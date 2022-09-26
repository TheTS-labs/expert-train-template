/* eslint-disable @typescript-eslint/no-var-requires */
/* global module, require, __dirname */

const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const transformer = require("ts-type-checked/transformer").default

const config = {
	entry: {
		hot_loader_patch: "react-hot-loader/patch",
		index: "./src/index.tsx",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: "url-loader",
						options: {
							mimetype: "image/png"
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.svg$/,
				use: "file-loader"
			},
			{
				test: /\.ts(x)?$/,
				use: [
					{
						loader: "ts-loader", 
						options: {
							getCustomTransformers: program => ({
								before: [transformer(program)],
							}),
						}, 
					}
				],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			templateContent: "./src/index.html",
			filename: "index.html",
			chunks: ["index"]
		}),
		new LodashModuleReplacementPlugin
	],
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all"
				}
			}
		}
	},
	resolve: {
		extensions: [
			".tsx",
			".ts",
			".js"
		],
		alias: {
			"react-dom": "@hot-loader/react-dom"
		}
	}
}

module.exports = (env, argv) => {
	if (argv.hot) {
		// Cannot use 'contenthash' when hot reloading is enabled.
		config.output.filename = "[name].[hash].js"
	}

	return config
}