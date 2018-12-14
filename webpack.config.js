
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path")

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/App.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/"
},

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
        "style-loader",
        "css-loader"
        ]
        }
    ]
  },
  plugins: [htmlWebpackPlugin]
};