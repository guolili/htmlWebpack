const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src/app.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },

    module: {
        rules: [{
                test: /\.js$/,
                loader: "babel-loader"
            }, {
                test: /\.html$/,
                loader: "html-loader"
            }, {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }, {
                test: /\.(eot|svg|ttf|woff|woff2|otf)/,
                use: "url-loader?limit=50000&name=[path][name].[ext]"
            },
            {
                test: /\.(jpg|jpeg|png|gif)/,
                loader: "file-loader"
            }
        ]
    },
    devServer: {
        host: "localhost",
        port: 8089,
        contentBase: "."
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:"common",
        //     filename:"common.js"
        // }), // config.optimization.splitChunks
        new HtmlWebpackPlugin({
            template: "./index.html",
        })
    ]
}