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
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
            exclude: /node_modules/,
         },
      ],
   },
};
