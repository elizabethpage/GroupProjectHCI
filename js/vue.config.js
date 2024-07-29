// vue.config.js
module.exports = {
    pages: {
      index: {
        entry: 'js/main.js', // Path to your main JavaScript entry file
        template: 'HomePage.html', // Path to your main HTML template
        filename: 'HomePage.html'
      },
      movies: {
        entry: 'js/main.js',
        template: 'Movies.html',
        filename: 'Movies.html'
      },
      categories: {
        entry: 'js/main.js',
        template: 'Categories.html',
        filename: 'Categories.html'
      },
      profile: {
        entry: 'js/main.js',
        template: 'Profile.html',
        filename: 'Profile.html'
      }
    },
    outputDir: 'dist', // Directory for the production build files
    assetsDir: 'assets', // Directory for static assets
    devServer: {
      port: 8080, // Port for the development server
      open: true, // Automatically open the browser
      proxy: 'http://localhost:3000' // Proxy for API requests (if needed)
    },
    configureWebpack: {
      resolve: {
        fallback: {
          stream: require.resolve('stream-browserify')
        }
      }
    }
  }
