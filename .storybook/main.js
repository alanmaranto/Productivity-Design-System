const cssModules = require("../config/cssModules");

module.exports = {
  // stories: [
  //   "../stories/**/*.stories.mdx",
  //   "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  // ],
  stories: ["../{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: cssModules(),
};
