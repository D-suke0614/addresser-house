module.exports = {
  "stories": [
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "storybook-addon-material-ui"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal(config) {
    delete config.resolve.alias['emotion-theming'];
    delete config.resolve.alias['@emotion/styled'];
    delete config.resolve.alias['@emotion/core'];
    return config;
  },
}
