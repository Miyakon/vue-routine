const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js', // エントリーポイント
  output: {
    path: path.resolve(__dirname, 'dist'), // 出力先
    filename: 'bundle.js' // 出力されるファイル名
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(), // VueLoaderPlugin を追加
    new HtmlWebpackPlugin({
        template: './src/index.html' // 既存のHTMLテンプレートを使用
      })
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js' // Vueのビルドタイプを設定
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 8080
  }
};
