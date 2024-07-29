const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const HtmlMinifier = require('html-minifier');

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'HomePage.html',
      filename: 'HomePage.html'
    },
    movies: {
      entry: 'src/main.js',
      template: 'Movies.html',
      filename: 'Movies.html'
    },
    categories: {
      entry: 'src/main.js',
      template: 'Categories.html',
      filename: 'Categories.html'
    },
    profile: {
      entry: 'src/main.js',
      template: 'Profile.html',
      filename: 'Profile.html'
    }
  },
  outputDir: 'dist',
  assetsDir: 'assets',
  devServer: {
    port: 8080,
    open: true,
    proxy: 'http://localhost:3000'
  },
  configureWebpack: {
    resolve: {
      fallback: {
        stream: require.resolve('stream-browserify')
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'HomePage.html'),
        filename: 'HomePage.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
      }),
    ],
  },
};




