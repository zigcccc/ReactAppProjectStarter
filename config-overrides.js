const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins([
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        api: './src/api',
        assets: './src/assets',
        components: './src/components',
        config: './src/config',
        constants: './src/constants',
        enums: './src/enums',
        helpers: './src/helpers',
        hooks: './src/hooks',
        pages: './src/pages',
        services: './src/services',
        styles: './src/styles',
        store: './src/store',
        stories: './src/stories',
        testing: './src/testing',
        utils: './src/utils',
      },
      extensions: ['.test.js', 'test.jsx', '.js', '.jsx'],
    },
  ])
);
