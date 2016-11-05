const webpack = require('webpack');

const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const PROD = process.env.NODE_ENV === 'production';

const env = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: PROD ? '' : 'source-map',
  entry: [
    path.resolve(ROOT_PATH, 'app/src'),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: PROD ? [] : ['eslint'],
        include: path.resolve(ROOT_PATH, 'app'),
      },
    ],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot',
    },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        stage: 0,
      },
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    },
    {
      test: /\.(png|otf|jpg|svg|gif|eot|woff|woff2|ttf)$/,
      loader: 'file-loader?name=[path][name]-[hash].[ext]',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    alias: {
      components: path.resolve(ROOT_PATH, 'app/src/components'),
      containers: path.resolve(ROOT_PATH, 'app/src/containers'),
      pages: path.resolve(ROOT_PATH, 'app/src/pages'),
      utils: path.resolve(ROOT_PATH, 'app/src/utils'),
      requests: path.resolve(ROOT_PATH, 'app/src'),
      config: path.join(ROOT_PATH, 'config', env),
    },
  },
  output: {
    path: PROD ? path.resolve(ROOT_PATH, 'dist') :
      path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'joanboixadós',
      template: 'index.html',
      favicon: 'woodstock.png',
    }),
  ],
};
