var webpack = require('webpack')

module.exports = {
    entry: {
        'use-redux': './src2/main.js',
        'no-redux': './src1/app.js'
    },
    output: {
        path: '',
        filename: './js/[name].build.js'
    },
    module: {
        loaders: [
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|gif)$/, 
                loader: 'url-loader?limit=819200'
            },
            {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel'
            },
            {   test: /\.css$/, 
                loader: 'style-loader!css-loader?sourceMap' 
            },
            {   
                test: /\.scss$/, 
                loader: "style!css!sass?sourceMap"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            { 
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    // example: if you wish to apply custom babel options
    // instead of using vue-loader's default:
    babel: {
        presets: ['es2015', 'stage-0', 'react']
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,  // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // })
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity) // 这是第三方库打包生成的文件
    ]
}
