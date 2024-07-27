// vue.config.js
module.exports = {
    pages: {
      index: {
        entry: 'js/main.js', // Path to your main JavaScript entry file
        template: 'public/index.html', // Path to your HTML template
        filename: 'index.html'
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
  
  