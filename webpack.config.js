const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader"
      },
        {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {}
                }
            ]
        }
    ]
  },
  resolve: {
      extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
    devServer: {
        contentBase: './dist'
    }
}
