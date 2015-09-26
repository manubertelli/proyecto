var express = require('express')
var router = express.Router();
var cors = require('cors')
var app = express();
var mongoUrl = 'mongodb://admin:admin123@ds041581.mongolab.com:41581/base_de_prueba';
var m = require('mongoose');
var bodyParser = require('body-parser')
var usersModel = require('../models/users')
// var apartmentsModel = require('./models/apartments')
var jwt = require('jwt-simple');
// var mandrill = require('mandrill-api/mandrill');
// var mandrill_client = new mandrill.Mandrill('asdasdasdasd');



//	permite utilizar rec.body
app.use(bodyParser.json())
app.use(cors())

//	me conecta a la base de datos
m.connect(mongoUrl, function(err){
	if (err) {
		console.log('esta todo mal: '+err);
	}else{
		console.log('esta todo bien, se conecto a la base');
	}
})


//	crea un nuevo user
app.post('/users', function(req, res){
    var newUser = new User(req.body);
    newUser.save(function(err) {
        if (err) {
            console.log('algo salio mal');
        } else {
            res.json(newUser);
            newUser.save();
        }
    })
})

//	obtiene lista de users
app.get('/users',function(req, res){
	console.log('user list');	
	usersModel.find(function(err, usersList){
		// console.log('find: ',usersList)
		res.json(usersList);
	})
	// console.log(req.params.name)
})

// 	obtiene un user
app.get('/users/:email?',function(req, res){
	console.log('user:email');
	var query = { email : req.params.email };
	usersModel.findOne( query, function(err, user){
		res.json(user);
	})
})


// exporta router
module.exports = router;