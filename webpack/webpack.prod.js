const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const entries = require('./webpack.entries.js');
const objectTreeToPathsObject = require('./objectTreeToPathsObject.js');

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,
  entry: objectTreeToPathsObject(entries),
  output: {
    library: 'webpack-repo',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(`./`),
    filename: './[name]/index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.tsx?$/,
        include: path.resolve('./src'),
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [...Object.keys(entries)],
    }),
  ],
  stats: 'minimal',
};
