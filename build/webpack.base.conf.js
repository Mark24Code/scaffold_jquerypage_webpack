const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: 'index.html',
            inject:true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            loader: "style-loader!css-loader!sass-loader"
        }, {
            test: /\.js$/,
            loader: 'babel-loader?presets[]=es2015',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader'
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader'
        }]
    }
};

