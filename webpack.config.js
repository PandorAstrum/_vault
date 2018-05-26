const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

    watch: true,

    target: 'electron-main',

    entry: [
        './app/src/renderer_process.js'
    ],

    output: {
        path: __dirname + '/app/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader?modules&localIdentName=[Local]---[hash:base64:5]']
                // loader: ExtractTextPlugin.extract({
                //   loader: ['style','css?modules&localIdentName=[Local]---[hash:base64:5]'],
                //   options: {
                //     modules: true
                //   }
                // })
            },
            {
                test: /\.(png|jpg|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        })
    ],

    resolve: {
      extensions: ['.js', '.json', '.jsx']
    }

}
