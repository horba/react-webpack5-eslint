const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },  
  devServer: {
    port: 3000,
    watchContentBase: true
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, 'src/components/'),
      "@views": path.resolve(__dirname, 'src/views/'),
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};