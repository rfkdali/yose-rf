var express = require('express');

var app = express();



app.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.render('index.ejs');
})
.get('/ping', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send('{"alive" : true}');
});


var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})

