const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve('src/index.tsx'),
    output: {
        path: path.resolve('dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [{ test: /.js|jsx$/, exclude: '/node_modules/', loader: "babel-loader" },
                { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devtool: "source-map"
}