const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
    ]
}
