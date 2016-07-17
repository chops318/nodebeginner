const http = require('http');
const url  = require('url');

function start(route) {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('Req for ' + pathname + ' received');

    route(pathname);

    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.write('Hello world');
    res.end()
  };
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
};

exports.start = start;
