const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
   mode: 'production',
   plugins: [
      new Dotenv({
         path: path.resolve(__dirname, '..', './.env.production'),
      }),
   ],
   devServer: {
      contentBase: path.resolve(__dirname, '..', './dist'),
   },
   devtool: 'source-map',
   module: {
      rules: [
         {
            test: /\.(js|jsx|)$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
         },
         {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: ['ts-loader'],
            options: { transpileOnly: true },
         },
      ],
   },
   optimization: {
      minimize: true,
      removeAvailableModules: true,
      removeEmptyChunks: true,
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
