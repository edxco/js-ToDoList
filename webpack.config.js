const path = require('path');
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
   output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: 
    [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpeg|jpg|svg|gif|mov|mp4)$/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'media',
            name: '[name].[ext]',
          },
        },
      },
    ]
  }
}