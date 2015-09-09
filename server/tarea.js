var express = require('express');
var myApp = express();
var request = require('request');

myApp.get('/meliProxy', function(req, res) {
    var query = req.query.q;
    var url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + query + '&limit=01';
    request(url, function(err, res, respuesta) {
        if (!err && res.statusCode == 200) {
            console.log(respuesta); //compruba la respuesta en consola
            return respuesta;
        }
    })

});


myApp.listen(8045, function() {
    console.log('server corriendo en el puerto 8045')
})
