var express = require('express');
var app = express();

app.get('/pepe', function(req, res){
	console.log('test')
});

app.listen(3000, function(){
	console.log('server corriendo')
})