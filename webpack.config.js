const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = {
  mode:process.env.NODE_ENV,
  // da para compilar arquivos
  /* 
  entry: {
    arquivo: ['./src/aquivo.ts'],
  }
  */
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    emitOnErrors: false,
  },
  plugins:[new ForkTsCheckerWebpackPlugin()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    //cria um output com o nome do arquivo colocado no objeto entry
    //filename: '[nome].js',
    filename: 'index.js',
    path: path.resolve(__dirname, 'public', 'dist'),
  },
};