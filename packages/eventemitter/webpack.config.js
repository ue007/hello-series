const common = require('../../webpack.config');
const { resolve } = require('path');

module.exports = {
	...common,
	mode: 'development',
	entry: './src/index.ts',
	output: {
		library: 'Incore',
		filename: 'bundle.js',
		path: resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', 'd.ts']
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ['ts-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					'file-loader?hash=sha512&digest=hex&name=images/[hash].[ext]',
					'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false'
				]
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};
