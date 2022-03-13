const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

  var userOps = require('./controller.js'); //logic
  const reqUrl =  url.parse(req.url, true);

  // GET 
  if(reqUrl.pathname == '/users' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.getUsers(req, res);
  }

  // POST 
  else if(reqUrl.pathname == '/user' && req.method === 'POST') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.createUser(req, res);
  }

 // Put 
  else if(reqUrl.pathname == '/userss' && req.method === 'PUT') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.createUser(req, res);

  // invalid URL
  else {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.invalidUrl(req, res);
  }
})
