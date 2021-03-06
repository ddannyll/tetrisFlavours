const { dir } = require('console')
const path = require('path')

module.exports = {
    entry:'./src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:/\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test:/\.(png|jpg|svg|gif)$/i,
                loader: 'file-loader'
            },
        ]
    },
    mode:'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    }
}