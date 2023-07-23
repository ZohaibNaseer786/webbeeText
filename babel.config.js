module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '~modules': './src/modules',
          '~core': './src/core',
          '~assets': './assets',
          '~components': './src/core/components',
          '~hooks': './src/core/hooks',
          '~navigation': './src/navigation',
          '~screens': './src/screens',
          '~theme': './src/theme',
          '~utils': './src/core/utils',
          '~configs': './src/core/configs',
          '~zustand': './src/zustand',
          '~styles': './src/theme/styles',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
