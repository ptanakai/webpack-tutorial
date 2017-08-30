const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/ts/app.ts'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                include: [path.resolve(__dirname, 'src/ts')],
                loader: 'ts-loader'
            },
            {
                test: /\.s(a|c)ss$/, //.sass .scss
                include: [path.resolve(__dirname, 'src/styles')],
                loader: 'style-loader!css-loader!sass-loader'
            }
            
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.json', '.ts', '.scss']
    }
}