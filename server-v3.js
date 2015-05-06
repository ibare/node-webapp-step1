var Express = require('express');
var express = Express();

function app(req, res) {
  res.send('Hello World');
}

function listening() {
  console.log('Server running');
}

express.all('*', app);
express.listen(8080, listening);
