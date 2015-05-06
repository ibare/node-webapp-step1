var http = require('http');
var server = http.createServer(app);

function app(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello World');
}

function listening() {
  console.log('Server running');
}

server.listen(8080);
server.on('listening', listening);
