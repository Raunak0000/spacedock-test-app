const http = require('http');

// SpaceDock routes traffic to port 8080 by default
const PORT = 8080;

// Grab the environment variable SpaceDock injected, or default to a fallback
const secretMsg = process.env.SECRET_MESSAGE || 'No secret provided. Injection failed!';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello from SpaceDock! Your secret is: ${secretMsg}\n`);
});

server.listen(PORT,'0.0.0.0' () => {
    console.log(`Server running on port ${PORT}`);
});
