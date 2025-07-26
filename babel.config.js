module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          common: './src/common',
          src: './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
