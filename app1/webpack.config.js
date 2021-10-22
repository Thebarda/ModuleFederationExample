const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

console.log(process.env.NODE_ENV);

module.exports = {
  entry: './src/index',
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    port: 3003,
    open: true,
    hot: true,
    injectHot: true,
    overlay: false,
  },
  output: {
    publicPath: "http://localhost:3003/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
          plugins: [
            isDevelopment && require.resolve('react-refresh/babel'),
          ].filter(Boolean),
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      shared: ['react', 'react-dom', 'react-i18next'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
