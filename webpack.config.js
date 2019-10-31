// const path = require('path');
// const webpack = require('webpack');


import path from 'path';
import webpack  from 'webpack'

console.log('Loading webpack config..')

import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
	mode: 'development',
	entry: './src/index.js',

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html')
		})],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							},
							'@babel/react'
						]
					]
				}
			},
			{
				// Compile React ES6 and above into ES5 syntax
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(css)$/,
				use: [
					"style-loader", // style nodes via JS strings
					"css-loader", //  CSS -> CommonJS
				]
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				loaders: ['file-loader']
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: true
	}
}
