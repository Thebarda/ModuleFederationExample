const path = require('path');

const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
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
    new ModuleFederationPlugin({
      name: 'app3',
      filename: 'remoteEntry.js',
      exposes: {
        // expose each component you want 
        './CounterState': './src/components/CounterState',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};
