const path = require('path');
const chokidar = require('chokidar');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

console.log(process.env.NODE_ENV)

module.exports = {
  entry: './src/index',
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    injectHot: true,
    overlay: false,
    after: (app, server) => {
      chokidar.watch(
        [path.resolve(__dirname, '..', 'app3', 'dist'), path.resolve(__dirname, '..', 'app2', 'dist')]
      ).on('all', () => {
        server.sockWrite(server.sockets, 'content-changed');
      });
    }
  },
  output: {
    publicPath: "http://localhost:3000/",
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
      remotes: {
        app2: "app2@http://localhost:3001/remoteEntry.js",
        app3: "app3@http://localhost:3002/remoteEntry.js",
      },
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
