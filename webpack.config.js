const path = require(`path`);
const portFinderSync = require(`portfinder-sync`);
const port = portFinderSync.getPort(1338);

module.exports = {
  entry: `./src/index.jsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    historyApiFallback: true,
    watchContentBase: true,
    open: true,
    hot: true,
    port,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: `source-map`,
};