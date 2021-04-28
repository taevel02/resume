const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: `${__dirname}/../dist`,
		filename: 'main.js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		clientLogLevel: 'warning',
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
				exclude: /node_module/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'taehoon kwon',
			template: 'index.html',
			filename: 'index.html',
			inject: true,
		}),
	],
};
