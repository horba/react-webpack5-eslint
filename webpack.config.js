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
        use: ['css-loader', 'style-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] 
      }
    ],
  },  
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    watchContentBase: true,
    open: true,
    hot: true,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, 'src/components/'),
      "@views": path.resolve(__dirname, 'src/views/'),
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
