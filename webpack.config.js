// required to access file paths
const path = require('path');

// required plug ins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// call module exports
module.exports = {
    // set env
    mode: 'development',
    // set entry and output paths
    entry: './src/index.js',
    // output requires obj with filename and path to dir
    // built in
    devtool: 'inline-source-map',
    devServer: {
        // config option : serve static files [html,css,js,etc..] / serve the files from the dir dist
        static: './dist'
    },
    // plugins array, multiple objects
    plugins: [
        // instance of plug in
        new HtmlWebpackPlugin({
            // config options
            title: 'Restaurant'
        })
    ],
    // renders a file, if dir is included, will render file with a new dir inside dir
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        // create set of rules for moduels
        // use an array, multiple objects
        rules: [
            {
                // loaders
                // specify what file path to test for, config option
                test: /\.css$/i,
                // specify what to use for this file type 
                use: ['style-loader', 'css-loader']
            },
            {
                // images
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // specify the type for images
                type: 'asset/resource'
            }
        ]
    }
}