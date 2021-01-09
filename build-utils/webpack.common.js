/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const fileExtensions = ['jpg', 'jpeg', 'png', 'gif', 'eot', 'otf', 'svg', 'ttf', 'woff', 'woff2'];

module.exports = {
   entry: path.resolve(__dirname, '..', './src/index.js'),
   module: {
      rules: [
         // {
         //    test: /\.tsx?$/,
         //    use: 'ts-loader',
         //    exclude: /node_modules/,
         // },
         // {
         //    test: /\.(js|jsx)$/,
         //    exclude: /node_modules/,
         //    use: ['babel-loader'],
         //    exclude: /node_modules/,
         // },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            exclude: /node_modules/,
         },
         {
            test: new RegExp(`.(${fileExtensions.join('|')})$`),
            loader: 'file-loader',
            options: {
               name: '[path][name].[ext]',
            },
            exclude: /node_modules/,
         },
      ],
   },
   resolve: {
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
   },
   plugins: [
      new ESLintPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         title: 'Advanced React with Webpack Setup',
         template: path.resolve(__dirname, '..', './src/index.html'),
      }),
   ],
   output: {
      path: path.resolve(__dirname, '..', 'dist'),
      filename: '[name].[contenthash].js',
   },
   optimization: {
      runtimeChunk: 'single',
      moduleIds: 'deterministic',
      splitChunks: {
         cacheGroups: {
            vendor: {
               test: /[\\/]node_modules[\\/]/,
               name: 'vendors',
               chunks: 'all',
            },
         },
      },
   },
};
