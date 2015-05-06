var http = require('http');
var fs = require('fs');
var server = http.createServer(app);

function app(req, res) {
  if(req.url.indexOf('/index.html') >= 0) {
    var file = fs.readFileSync('index.html', { encoding: 'utf-8' });

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(file);
  } else if(req.url.indexOf('/about.html') >= 0) {
    var file = fs.readFileSync('about.html', { encoding: 'utf-8' });

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(file);
  } else {
    res.writeHead(404);
    res.writeHead({ 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
}

function listening() {
  console.log('Server running');
}

server.listen(8080);
server.on('listening', listening);
