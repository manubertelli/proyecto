var request = require('request');
// var query = request.query;
var myUrl = require('./tarea')

var repuesta = request(myUrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(json);
  }
});


// var query = req.query.q;
// // console.log(query) // comprueba el valor del query
// var url ='https://api.mercadolibre.com/sites/MLA/search?q=' + query + '&limit=10';

module.exports = {repuestaMeli: repuesta}