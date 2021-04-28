const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		filename: 'main.js',
		path: `${__dirname}/../dist`,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true,
		port: 3000,
		publicPath: '/dist',
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
		new HtmlWebpackPlugin({
			title: 'taehoon kwon',
			template: 'index.html',
			filename: 'index.html',
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				html5: true,
				minifyCSS: true,
				removeEmptyAttributes: true,
			},
			hash: true,
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
		new CleanWebpackPlugin(),
	],
};
