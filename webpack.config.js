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
      Lib: path.resolve(__dirname, 'src/modules/'),
      Commands: path.resolve(__dirname, 'src/Commands/'),
      Cards: path.resolve(__dirname, 'src/Cards/'),
      Players: path.resolve(__dirname, 'src/Players/'),
    },
  },
  optimization: {
    minimize: false
  },
};
