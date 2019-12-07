
import path from 'path'
import webpack from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'


console.log('Loading webpack config..')

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',

	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	  },

	plugins: [new webpack.ProgressPlugin(),
	
    	new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		})],

	module: {
		rules: [
			{
				test: /.(ts|js)x?$/,
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
				test: /\.(js|jsx|ts)$/,
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
		hot: true,
	}
}
