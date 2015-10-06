var express = require('express')
var router = express.Router();
var mongoUrl = 'mongodb://admin:admin123@ds041581.mongolab.com:41581/base_de_prueba';
var m = require('mongoose');
var usersModel = require('../models/users')
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('MiSVDIb79G0b3CJE7cX8sw');
// var jwt = require('jwt-simple');

//	me conecta a la base de datos
m.connect(mongoUrl, function(err) {
    if (err) {
        console.log('esta todo mal: ' + err);
    } else {
        console.log('esta todo bien, se conecto a la base');
    }
})


//	crea un nuevo user
router.post('/', function(req, res) {
    var newUser = new usersModel(req.body);
    newUser.save(function(err) {
        if (err) {
            res.status(400).json({
                error: 'algo paso'
            })
        } else {
            res.json(newUser);
        }
    })
    // email de bienvenida
    var message = {
        "html": "Hola te has registrado correctamente!! Tu usuario es: "+newUser.email+" y tu clave: "+newUser.password,
        "subject": "Bienvenido",
        "from_email": "message.from_email@example.com",
        "from_name": "Manu Bertelli",
        "to": [{
            "email": newUser.email
        }]
    };

    mandrill_client.messages.send({
        "message": message
    }, function(result) {
        console.log('email result', result);
    }, function(e) {
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message)
    });
})
//	obtiene lista de users
router.get('/', function(req, res) {
    usersModel.find(function(err, usersList) {
        // console.log('find: ',usersList)
        res.json(usersList);
    })
    // console.log(req.params.name)
})

// 	obtiene un user
router.get('/:email?', function(req, res) {
    var query = {
        email: req.params.email
    };
    usersModel.findOne(query, function(err, user) {
        res.json(user);
    })
})


// exporta router
module.exports = router;