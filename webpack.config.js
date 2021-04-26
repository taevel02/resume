const webpack = require('webpack');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',

	entry: './src/index.tsx',

	output: {
		filename: 'main.js',
		path: `${__dirname}/dist`,
	},

	devtool: 'source-map',

	devServer: {
		historyApiFallback: true,
		inline: true,
		hot: true,
		port: 3000,
		contentBase: './',
		publicPath: '/dist',
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'esbuild-loader',
				options: {
					loader: 'tsx',
					target: 'es2015',
				},
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true },
					},
				],
			},
		],
	},

	optimization: {
		minimizer: [
			new ESBuildMinifyPlugin({
				target: 'es2015',
				css: true,
			}),
		],
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
		new CleanWebpackPlugin(),
	],
};
