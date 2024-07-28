Node.js HTTP Server
This Node.js project creates a simple HTTP server that can create timestamped text files and list all files in the server's directory.

Features
Create File: Generates a text file with the current date and time as its content and filename.
List Files: Lists all files in the server's directory.
Endpoints
GET /create-file
Creates a new text file with the current date and time as its filename and content.

Response:
200 OK: File created successfully.
500 Internal Server Error: Failed to create file.
GET /list-files
Retrieves a list of all files in the server's directory.

Response:
200 OK: List of files in JSON format.
500 Internal Server Error: Failed to retrieve files.
