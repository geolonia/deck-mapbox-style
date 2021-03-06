const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: './src/docs.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: 'production',
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 3000
  }
};

module.exports = config