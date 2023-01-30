const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
    entry: './bootstrap.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "."),
            outDir: path.resolve(__dirname, "docs"),
            release: true,
            target: "web",
        })
    ],
    mode: 'development',
    experiments: {
        asyncWebAssembly: true
    },
    devServer: {
        host: '0.0.0.0',
        port: 8079,
        allowedHosts: ['all']
    },
    devtool: 'eval-source-map'

};