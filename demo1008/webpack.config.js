const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // または、'./src/index.html'のテンプレートを使用
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        static: './dist',
    },
};
