var Express = require('express');
var express = Express();

express.use(Express.static('./'));

function listening() {
  console.log('Server running');
}

express.listen(8080, listening);
