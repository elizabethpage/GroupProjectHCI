
/*
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const pages = {
  index: {
    entry: 'src/main.js',
    template: path.resolve(__dirname, 'HomePage.html'),
    filename: 'HomePage.html',
    title: 'Home Page'
  },
  movies: {
    entry: 'src/main.js',
    template: path.resolve(__dirname, 'Movies.html'),
    filename: 'Movies.html',
    title: 'Movies'
  },
  categories: {
    entry: 'src/main.js',
    template: path.resolve(__dirname, 'Categories.html'),
    filename: 'Categories.html',
    title: 'Categories'
  },
  profile: {
    entry: 'src/main.js',
    template: path.resolve(__dirname, 'Profile.html'),
    filename: 'Profile.html',
    title: 'Profile'
  }
};

module.exports = {
  pages,
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
    plugins: Object.keys(pages).map(page => {
      return new HtmlWebpackPlugin({
        filename: pages[page].filename,
        template: pages[page].template,
        chunks: [page],
        title: pages[page].title,
        minify: false,
      });
    }),
    optimization: {
      minimizer: [],
    }
  }
}

*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: path.resolve(__dirname, 'HomePage.html'),
      filename: 'HomePage.html',
      title: 'Home Page'
    }
  },
  configureWebpack: {
    resolve: {
      fallback: {
        stream: require.resolve('stream-browserify')
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'HomePage.html',
        template: path.resolve(__dirname, 'HomePage.html'),
        title: 'Home Page'
      })
    ],
    optimization: {
      minimizer: [],
    }
  }
}



