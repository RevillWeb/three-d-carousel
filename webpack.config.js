var path = require('path');

module.exports = {

    entry: './app.js',

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.js'],
    }

};