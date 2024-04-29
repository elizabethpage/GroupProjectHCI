const http = require('http');
const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');

// Define the port number for your server
const port = 3000;
const movieDataPath = './assets/imdb_top_1000.csv';
let movieData = [];

// Create a simple HTTP server
const server = http.createServer((req, res) => {
    // Determine the requested URL path
    let filePath = '.' + req.url;

    // Check if the requested file is the CSV file
    if (filePath === movieDataPath) {
        // Read the CSV file and parse it using csv-parser
    } else if (req.url.startsWith('/search')) {
        // Handle search request
        const searchQuery = req.url.split('?')[1]?.split('=')[1];
        if (searchQuery) {
            const filteredData = movieData.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(filteredData));
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Invalid search query');
        }
    } else {
        // Serve other requested files as usual
        filePath = filePath === './' ? './HomePage.html' : filePath;
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
    }
});

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

