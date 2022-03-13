const url = require('url');
const users = require('./userData.js');


const availableEndpoints = [
  {
    method: "GET",
    getUsers: "/users"
  },
  {
    method: "POST",
    createUser: "/user"
  }
{
    method: "PUT",
    createUser: "/userss"
  }
]

exports.getUsers = function(req, res) {
  const reqUrl = url.parse(req.url, true)
  var response = [
    {
      "hello": "All users"
    },
    users
  ];
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.createUser = function(req, res) {
  body = '';

  req.on('data',  function (rk) {
    body += rk;
  });

  req.on('end', function () {
    postBody = JSON.parse(body);

    var response = [
      {
      "success": "User added"
      },
      postBody
    ]

    res.statusCode = 201;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))
  })
}

exports.invalidUrl = function(req, res) {
  var response = [
    {
    "wrong": "try something different"
    },
    availableEndpoints
  ]
  res.statusCode = 404;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}