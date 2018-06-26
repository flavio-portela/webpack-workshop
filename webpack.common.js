const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
            presets: ["env", "react"]
        }
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
          loader: "file-loader"
      },
      {
          test: /\.css$/,
          use: [
              "style-loader",
              "css-loader"
          ] 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      hash: true
    }),
    new CleanWebpackPlugin([
        'dist'
    ])
  ]
};
