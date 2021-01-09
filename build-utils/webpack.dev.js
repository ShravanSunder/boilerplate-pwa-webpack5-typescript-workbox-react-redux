const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
   mode: 'development',
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new Dotenv({
         path: path.resolve(__dirname, '..', './.env.development'),
      }),
      new webpack.EvalSourceMapDevToolPlugin({
         exclude: ['vendor.js'],
      }),
      new ReactRefreshWebpackPlugin(),
   ],
   devServer: {
      contentBase: path.resolve(__dirname, '..', './dist'),
      hot: true,
   },
   devtool: 'eval-source-map',
   module: {
      rules: [
         // ... other rules
         {
            test: /\.[tj]sx?$/,
            exclude: /node_modules/,
            use: [
               // ... other loaders
               {
                  loader: require.resolve('babel-loader'),
                  options: {
                     // ... other options
                     plugins: [
                        // ... other plugins
                        require.resolve('react-refresh/babel'),
                     ].filter(Boolean),
                  },
               },
            ],
         },
      ],
   },
};
