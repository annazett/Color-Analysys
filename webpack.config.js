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
                { loader: 'css-loader' }
            ]
        },
        {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/'
                    }
                }
            ]
        }
    ]
  },
  resolve: {
      extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + "/docs",
    filename: "bundle.js"
  },
    devServer: {
        contentBase: './docs'
    }
}
