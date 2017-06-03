const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		js: './src/main.js',
		css: './src/main.css',
	},
	output: { path: __dirname + '/public', filename: '[name].js' },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					loader: 'css-loader!postcss-loader'
				}),
			},
		],
	},
	plugins: [
		new ExtractTextPlugin('/bundle.css')
	],
	devtool: 'source-map',
	devServer: {
		contentBase: './public',
		port: 8000,
		inline: true,
		historyApiFallback: true
	}
}
