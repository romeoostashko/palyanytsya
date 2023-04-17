module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          src: './',
          components: './src/components',
          screens: './src/screens',
          asyncStorage: './src/asyncStorage',
          stack: './src/navigation',
          store: './src/store',
          hooks: './src/hooks',
          theme: './src/theme',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
