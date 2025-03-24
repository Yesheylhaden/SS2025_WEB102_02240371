// Import the built-in HTTP module to create a server
const http = require('http');

// A sample array to store student data
// Consider this as a database for now
const students = [
    {id: 1, name: "Yeshey", age: 20 },
    {id: 2, name: "Sangay", age: 19 }
];

// Create an HTTP server
const server = http.createServer((req, res) => {
    //Set response header to JSON format
    res.setHeader('Content-Type', 'application/json');

// Check if the request is a GET request to the homepage "/"
if (req.method === 'Get' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Response type is plain text
    res.end('Welcome to our API'); // Send response text
}

// Check if the request is a GET request to "/students"
else if (req.method === 'GET' && req.url === '/students') {
    res.writeHead(200); // Set status code 200 (OK)
    res.end(JSON.stringify(students)); // Convert students array to JSON and send it 
}

// If the request doesn't match any of the above routes, return 404 Not Found
else {
    res.writeHead(404);
    res.end(JSON.stringify({error: "Route not found" }));
}
});

// start the server and listen on port 3000
server.listen(3000, () => {
    console.log('Server running on the http://localhost:3000');
});
