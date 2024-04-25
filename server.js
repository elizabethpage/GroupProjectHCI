const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port number for your server
const port = 3000;

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Determine the requested URL path
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './HomePage.html'; // Default file to serve
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found, respond with a 404 error
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        // Other error, respond with a 500 error
        res.writeHead(500);
        res.end('500 Internal Server Error');
      }
    } else {
      // File found, serve its content with appropriate content type
      const ext = path.extname(filePath);
      let contentType = 'text/html';
      if (ext === '.js') {
        contentType = 'text/javascript';
      } else if (ext === '.css') {
        contentType = 'text/css';
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

