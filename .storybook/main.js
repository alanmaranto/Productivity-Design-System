// const cssModules = require("../config/cssModules");

const cssModules = () => async (config) => {
  // We search the rule defined for `*.css` files
  const cssRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test(".css")
  );

  // We exclude `*.module.css` files from the previous rule
  cssRule.exclude = /\.module\.css$/;

  // We add a our custom rule for `*.module.css` files
  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: true,
        },
      },
    ],
  });

  return config;
};

module.exports = {
  // stories: [
  //   "../stories/**/*.stories.mdx",
  //   "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  // ],
  stories: ["../{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: cssModules(),
};
