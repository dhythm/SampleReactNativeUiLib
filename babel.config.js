module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
        alias: {
          '@core/components': './src/core/components',
          '@app/pages': './src/app/pages',
        },
      },
    ],
    'babel-plugin-styled-components',
  ],
};
