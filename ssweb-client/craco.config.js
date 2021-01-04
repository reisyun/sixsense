const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  babel: {
    plugins: [['@emotion', { labelFormat: '[filename]--[local]' }]],
  },
  webpack: {
    extensions: ['.js', '.ts', '.tsx', '.d.ts', '.json'],
    alias: {
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components'),
      '@styles': resolve('src/styles'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@components(.*)$': '<rootDir>/src/components$1',
      },
    },
  },
};
