const path = require('path');

module.exports = {
  webpack: {
    extensions: ['.js', '.ts', '.tsx', '.d.ts', '.json'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
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
