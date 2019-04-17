const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.css$/,
    loaders: ['css-loader'],
    include: path.resolve(__dirname, '../'),
  });
  config.module.rules.push({ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ })
  config.plugins.push(new ForkTsCheckerWebpackPlugin())
  config.devtool = 'source-map';
  // Return the altered config
  return config;
};
