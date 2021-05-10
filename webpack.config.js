const path = require("path")
const webpack = require("webpack")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	plugins: [
		new MiniCSSExtractPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "index.bundle.js",
	},
	devServer: {
		port: 3000,
		open: true,
		watchContentBase: true,
		clientLogLevel: "silent",
		hot: true,
	},

	module: {
		rules: [
			{
				test: /\.(gif|png|webp|jpe?g)$/, //Customise according to your need
				use: [
					{
						loader: "url-loader",
					},
				],
			},
			{
				test: /\.(js|jsx)/,
				include: path.resolve(__dirname, "src"),
				exclude: /node_modules/,
				use: ["babel-loader", "eslint-loader"],
			},
			{
				test: /\.css$/i,
				use: [MiniCSSExtractPlugin.loader, "css-loader"],
			},
		],
	},
}
