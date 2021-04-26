const webpack = require('webpack');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

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
				use: ['style-loader', 'css-loader', 'sass-loader'],
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

	plugins: [new webpack.HotModuleReplacementPlugin()],
};
