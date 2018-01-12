const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /.js|jsx$/,
                exclude: '/node_modules/',
                loader: "babel-loader"
            }
        ]
    }
}