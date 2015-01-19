var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.render('index.ejs');
})
.get('/contact', function(req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.render('contact.ejs');
})
.get('/ping', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send('{"alive" : true}');
})
.get('/primeFactors', function(req, res) {

function tableauPower(){
	//on declare number comme la valeur du parametre number de l'url
	var number = req.param("number");
	var init = 1;
	tab = new Array;
	if(number % 2 == 0){
		for(i=0; init<number; i++){
			init *= 2;
			tab[i] = 2;
		}
	}
	if(init == number){
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ "number" : number, "decomposition" : tab  }));
	}
	else{
		res.send("not a power of 2")
	}
}
tableauPower();
});


var server = app.listen(process.env.PORT || 3000, function () {
	var host = server.address().address
	var port = server.address().port
	console.log('App listening at http://%s:%s', host, port)
})

