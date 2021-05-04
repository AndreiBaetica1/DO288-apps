'use strict';
var http =  require('http');
http.createServer(function(req, res){
var opts = {
  host: 'www.google.com',
  path: '/',
};
http.request(opts, function(response){
response.on('data', function(chunk){});
response.on('end', function(){
  res.write('status='+ response.statusCode);
  res.end();
});
response.on('error', function(){
  res.write('error='+ response.statusCode);
  res.end();
});
}).end();
}).listen(8000);
console.log('Server running at localhost:8000');
package.json
{
  "name": "octest",
  "version": "1.0.0",
  "description": "test",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC"
}
