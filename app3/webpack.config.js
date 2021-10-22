const path = require('path');

const { ModuleFederationPlugin } = require('webpack').container;
const { MFLiveReloadPlugin } = require("@module-federation/fmr");

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    publicPath: "http://localhost:3002/", // Added this
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3002,
    hot: true,
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new MFLiveReloadPlugin({
      port: 3002, // the port your app runs on
      container: "app3", // the name of your app, must be unique
    }),
    new ModuleFederationPlugin({
      name: 'app3',
      filename: 'remoteEntry.js',
      library: { type: "umd", name: "app3" },
      exposes: {
        './hooks/CounterState': './src/components/CounterState',
        './hooks/Hello': './src/components/Hello',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};
