const { ModuleFederationPlugin } = require('webpack').container;
const { MFLiveReloadPlugin } = require("@module-federation/fmr");

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    publicPath: "http://localhost:3001/", // Added this
  },
  devServer: {
    port: 3001,
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
      port: 3001, // the port your app runs on
      container: "app2", // the name of your app, must be unique
    }),
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      library: { type: "umd", name: "app2" },
      exposes: {
        './Counter': './src/components/Counter',
      },
      shared: ['react', 'react-dom', 'react-i18next'],
    }),
  ],
};
