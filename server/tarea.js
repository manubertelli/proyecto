var express = require('express');
var myApp = express();
var https = require('https');
var request = require('request');

myApp.get('/meliProxy', function(req, res){
	var query = req.query.q;
	// console.log(query) // comprueba el valor del query
	var url ='https://api.mercadolibre.com/sites/MLA/search?q=' + query + '&limit=10';
	// console.log(url); //comprueba la url que se forma
	res.json(url);
	https.get('https://api.mercadolibre.com/sites/MLA/search?q=' + query + '&limit=10', function(res){
		
	})
	console.log('refresco')
});

myApp.listen(8045, function(){
	console.log('server corriendo en el puerto 8045')
})



request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})