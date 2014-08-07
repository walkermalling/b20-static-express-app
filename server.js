var http = require('http');
var express = require('express');
var filter = require('./filter');

var app = express();

app.use(express.static(__dirname + '/public'));

// routes

app.get('/:fileName',function(req,res){

  var requestedFile = req._parsedUrl.pathname;
  var exists = filter(requestedFile);

  if (exists)
    res.sendFile(__dirname + '/public' + requestedFile);
  else
    res.sendFile(__dirname + '/public/sample.json');

});

app.get('*', function(req,res){
  res.sendfile(__dirname + '/public/home.html');
});


// serve

var server = http.createServer(app);

server.listen(3000, function() {
  console.log('Server running on :3000');
});
