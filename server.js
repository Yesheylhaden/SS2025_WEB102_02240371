const http = require("http");

const PORT = 3000; // Define the server port

const server = http.createServer((req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the server.");
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
