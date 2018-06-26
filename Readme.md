# Webpack Workshop

## Before you start

1. Clone this repository

    `git clone https://github.com/flavio-portela/webpack-workshop`
2. Install the dependencies

    + `cd webpack-workshop`
    + `npm install`

## Basic Concepts

+ Entry
    ```javascript
    module.exports = {
        entry: "./src/index.js",
    }
    ```
+ Output
    ```javascript
    module.exports = {
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js"
        }
    }
    ```
+ Loaders
    ```javascript
    module.exports = {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }
            ]
        }
    }
    ```

+ Plugins
    + `HtmlWebpackPlugin`
        > [Documentation](https://github.com/jantimon/html-webpack-plugin)

        >`npm install --save-dev html-webpack-plugin`
        ```javascript
        const HtmlWebpackPlugin = require("html-webpack-plugin");
        module.exports = {
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./src/index.html",
                    hash: true
                })
            ]
        };
        ```
    + `CleanWebpackPlugin`
        > [Documentation](https://github.com/johnagan/clean-webpack-plugin)

        >`npm install --save-dev clean-webpack-plugin`

        ```javascript
        const CleanWebpackPlugin = require('clean-webpack-plugin');
        module.exports = {
            plugins: [
                new CleanWebpackPlugin(['dist'])
            ]
        };
        ```