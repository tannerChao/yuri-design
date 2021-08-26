/*
 * @Description:
 * @Autor: botter
 * @Date: 2021-08-19 11:47:15
 * @LastEditTime: 2021-08-26 19:22:36
 */
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType, ...others }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // console.log(config)
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });
    // config.output['libraryTarget'] = 'umd'
    // console.log(config, '----///')
    // console.log(config, '----');
    return config;
  },
};
