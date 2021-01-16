const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index',
  output: {
    publicPath: "http://localhost:3001/", // Added this
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3001,
    open: true,
    hot: true,
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
    new ModuleFederationPlugin({
      name: 'app2',
      library: { type: 'var', name: 'app2' },
      filename: 'remoteEntry.js',
      exposes: {
        // expose each component you want 
        './Counter': './src/components/Counter',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};
