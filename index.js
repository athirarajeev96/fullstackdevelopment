const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port number and folder path
const port = 3001; // port number
const folderPath = __dirname; // Directory where files are stored

// Create the HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/create-file') {
            // Generate the current date and time for the filename
            const now = new Date();
            const timestamp = now.toISOString().replace(/:/g, '-'); // Replace ':' with '-' for valid filenames
            const filename = `${timestamp}.txt`;
            const filePath = path.join(folderPath, filename); // Directly create the file in the current directory

            // Write the current date and time to the file
            fs.writeFile(filePath, now.toString(), 'utf-8', (err) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Failed to create file');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(`File created successfully: ${filename}`);
                }
            });
        } else if (req.url === '/list-files') {
            // Retrieve all files in the folder
            fs.readdir(folderPath, (err, files) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Failed to retrieve files');
                } else {
                    // Send the list of all files
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
