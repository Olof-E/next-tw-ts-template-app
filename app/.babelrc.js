module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: [
    ['babel-plugin-twin', { debug: true }], //if you want to get debugging feedback
    'babel-plugin-macros',
    '@emotion/babel-plugin',
  ],
};
