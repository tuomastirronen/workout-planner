const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const config = {
  entry: './frontend/src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'frontend/public/index.html',
    })
  ]
}
module.exports = config