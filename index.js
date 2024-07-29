const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port number and folder path
const port = process.env.PORT || 3001; // Use environment port or default to 3001
const folderPath = __dirname; // Directory where files are stored

// Create the HTTP server
const server = http.createServer((req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`); // Log the request method and URL

    if (req.method === 'GET') {
        if (req.url === '/create-file') {
            const now = new Date();
            const timestamp = now.toISOString().replace(/:/g, '-'); // Replace ':' with '-' for valid filenames
            const filename = `${timestamp}.txt`;
            const filePath = path.join(folderPath, filename);

            fs.writeFile(filePath, now.toString(), 'utf-8', (err) => {
                if (err) {
                    console.error('Error creating file:', err); // Log error details
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Failed to create file');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(`File created successfully: ${filename}`);
                }
            });
        } else if (req.url === '/list-files') {
            fs.readdir(folderPath, (err, files) => {
                if (err) {
                    console.error('Error listing files:', err); // Log error details
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Failed to retrieve files');
                } else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(files));
                }
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
