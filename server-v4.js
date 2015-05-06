var fs = require('fs');
var Express = require('express');
var express = Express();

function listening() {
  console.log('Server running');
}

function index(req, res) {
  var file = fs.readFileSync('index.html', { encoding: 'utf-8' });

  res.send(file);
}

function about(req, res) {
  var file = fs.readFileSync('about.html', { encoding: 'utf-8' });

  res.send(file);
}

express.get('/index.html', index);
express.get('/about.html', about);

express.listen(8080, listening);
