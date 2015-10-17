angular.module('proyectoApp', ['ui.router']);
var modulo = angular.module('proyectoApp');
// var express = require('express');
// var cors = require('cors');


//define las rutas
modulo.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'myTemplates/seccionHome.html',
        controller: 'HomeCtrl'
    });
    $stateProvider.state('resultados', {
        url: '/resultados?q',
        templateUrl: 'myTemplates/seccionResultados.html',
        controller: 'ResultadosCtrl'
    });
    $stateProvider.state('registro', {
        url: '/registro',
        templateUrl: 'myTemplates/seccionRegistro.html',
        controller: 'ResgistroCtrl'
    });
    $stateProvider.state('ingresar', {
        url: '/ingresar',
        templateUrl: 'myTemplates/seccionIngreso.html',
        controller: 'IngresoCtrl'
    });
    $stateProvider.state('recuperarPassword', {
        url: '/recuperarPassword',
        templateUrl: 'myTemplates/seccionRecuperarPassword.html',
        controller: 'RecuperarPasswordCtrl'
    });
    $stateProvider.state('misPublicaciones', {
        url: '/misPublicaciones',
        templateUrl: 'myTemplates/seccionMisPublicaciones.html'
    });
    $urlRouterProvider.otherwise('/home'); //si no encuentra ruta va al /home o lo que pongas ahí (404)
});





//////////////////////////////////////////////////////
//													//
// 				** CONTROLLERS **					//
//													//
//////////////////////////////////////////////////////


// // recibe el valor del input y te envia resultados
// modulo.controller('HomeCtrl', function($scope, $state) {
//     $scope.irAlResultado = function() {
//         var query = $scope.parametroDeBusqueda; //le da el valor del input a la variable query

//         $state.go('resultados', {
//             q: query
//         }) //le atribuye el valor de la variable query a la key q

//         console.log($scope.parametroDeBusqueda) //comprueba el valor que le atribuye a query
//     }
// })

// // le pega a la api y trae el resultado de la busqueda
// modulo.controller('ResultadosCtrl', function($stateParams, $scope, $http) {
//     var url = 'https://proyectoairbnb.herokuapp.com' + $stateParams.q;

//     $http.get(url)
//         .then(function(respuestaDelServer) {
//             $scope.resultados = respuestaDelServer.data.results;
//         })
//         .catch(function() {
//             console.log('todo mal');

//         })
//         .finally(function() {
//             console.log('finalmente');
//         })
//     console.log(url)
// })

// // recibe los datos del registro y los envia a la db
// modulo.controller('ResgistroCtrl', function($scope, $state, $http) {
//     // var myBase = 'http://localhost:3041/users/registro'
//     var myApp = 'https://proyectoairbnb.herokuapp.com/users/registro'

//     $scope.registrarme = function() {
//         var usuario = $scope.emailRegistro;
//         var clave = $scope.passwordRegistro;
//         var data = {
//             email: usuario,
//             password: clave
//         };
//         $http.post(myApp, data)
//             .then(function(respuestaDeMyBase) {
//                 console.log('el nuevo usuario es: ', respuestaDeMyBase);
//             }, function(error) {
//                 alert(error.data.error);
//                 console.log(error);
//             })
//     }
// })

// // login
// modulo.controller('IngresoCtrl', function($scope, $state, $http) {
//     // var myBase = 'http://localhost:3041/users/ingresar' // en realidad seri myApp
//     var myApp = 'https://proyectoairbnb.herokuapp.com/users/ingresar' // en realidad seri myApp

//     $scope.ingresar = function() {
//         var usuario = $scope.emailRegistro;
//         var clave = $scope.passwordRegistro;
//         var data = {
//             email: usuario,
//             password: clave
//         };        
//         $http.post(myApp,data)
//             .then(function(respuestaDeMyBase) {
//                 console.log('funciono'+respuestaDeMyBase);
//                 alert('bienvenido');
//             }, function(error) {
//                 alert(error.data.error);
//                 console.log('error: '+error);
//             })
//         $state.go('home');
//     }
// })