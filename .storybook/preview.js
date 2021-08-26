/*
 * @Description:
 * @Autor: botter
 * @Date: 2021-08-19 11:47:15
 * @LastEditTime: 2021-08-19 15:05:17
 */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
