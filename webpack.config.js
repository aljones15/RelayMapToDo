const webpack = require('webpack');
const path = require('path');

console.log(process.env);

module.exports = (env) => ({
  entry: {
    app: path.resolve(__dirname, 'src', 'index.jsx'),
  },
    module: {
      loaders: [
        
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          test: /\.(js|jsx)?$/,
        }],
        rules: [
          {
          test: /\.jsx$/,
          exclude: /(node_modules)/,
          use: [
            'babel-loader',
          ]
          },
        {
          test: /\.html$/,
          loader: 'file-loader'
        },
        { 
          test: /\.json$/, 
          loader: 'json-loader' 
        }
        ]
    },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [
    new webpack.EnvironmentPlugin(['MapboxAccessToken'])
  ],
  node: {
    fs: 'empty',
    net: 'empty',
  },
});
