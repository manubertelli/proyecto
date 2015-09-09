var mod = require('./myModulo');
var om = require('./otroModulo');
var fs = require('fs');
var ld = require('lodash');
var  saludo = "hola!";
var saludar = function(){
	return'hola mundo';
};
console.log(mod);
console.log(om);


// fs.writeFile('message.txt', 'hello node',
// 	function(err){
// 		if(!err){
// 			console.log('se\ guardo')
// 		}
// 		else{
// 			console.log('hubo\ un \ error')
// 		}
// 	}
// );

console.log(ld.now())