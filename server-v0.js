var http = require('http');
var server = http.createServer(app);

function app(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello World');
}

server.listen(8080);

console.log('Server running');
