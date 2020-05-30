const path = require('path');

module.exports = {
  entry: {
    app: './src/MineBall.js',
  },
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'src/'),
      Module: path.resolve(__dirname, 'src/modules/'),
      Card: path.resolve(__dirname, 'src/Card/'),
      Player: path.resolve(__dirname, 'src/Player/'),
    },
  },
};
