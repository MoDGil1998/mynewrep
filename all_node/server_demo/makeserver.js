var http = require ('http');
http.createServer (function(req,res){
res.write("Hello world from node js server");
res.end();

}).listen(7070)