/**
 Webpack configuration
 */

const path = require('path');

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const HtmlWebPackPlugin = require( "html-webpack-plugin" );


module.exports = {
	entry: {
		"index": './src/main.js',
		"styles": './src/scss/shopfront.scss'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js', // bundle created by webpack it will contain all our app logic. we will link to this .js file from our html page.
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [ '@babel/preset-env' ]
					}
				}
			},
			{
				test: /\.tsx?$/,
				use: [ 'babel-loader', 'ts-loader' ],
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: "[name].css",
			chunkFilename: '[id].css'
		} ),
		new HtmlWebPackPlugin( {
			filename: "index.html",
			template: "./src/index.html"
		} ),
	],
	resolve: {
		extensions: [ '.tsx', '.ts', '.js', '.scss', '.jsx' ]
	}
};

