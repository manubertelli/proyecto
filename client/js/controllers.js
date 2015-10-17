var modulo = angular.module('proyectoApp');

// recibe el valor del input y te envia resultados
modulo.controller('HomeCtrl', function($scope, $state) {
    $scope.irAlResultado = function() {
        var query = $scope.parametroDeBusqueda; //le da el valor del input a la variable query

        $state.go('resultados', {
            q: query
        }) //le atribuye el valor de la variable query a la key q

        console.log($scope.parametroDeBusqueda) //comprueba el valor que le atribuye a query
    }
})

// le pega a la api y trae el resultado de la busqueda
modulo.controller('ResultadosCtrl', function($stateParams, $scope, $http) {
    var url = 'https://proyectoairbnb.herokuapp.com' + $stateParams.q;

    $http.get(url)
        .then(function(respuestaDelServer) {
            $scope.resultados = respuestaDelServer.data.results;
        })
        .catch(function() {
            console.log('todo mal');

        })
        .finally(function() {
            console.log('finalmente');
        })
    console.log(url)
})

// recibe los datos del registro y los envia a la db
modulo.controller('ResgistroCtrl', function($scope, $state, $http) {
    // var myBase = 'http://localhost:3041/users/registro'
    var myApp = 'https://proyectoairbnb.herokuapp.com/users/registro'

    $scope.registrarme = function() {
        var usuario = $scope.emailRegistro;
        var clave = $scope.passwordRegistro;
        var data = {
            email: usuario,
            password: clave
        };
        $http.post(myApp, data)
            .then(function(respuestaDeMyBase) {
                console.log('el nuevo usuario es: ', respuestaDeMyBase);
            }, function(error) {
                alert(error.data.error);
                console.log(error);
            })
    }
})

// login
modulo.controller('IngresoCtrl', function($scope, $state, $http) {
    // var myBase = 'http://localhost:3041/users/ingresar' // en realidad seri myApp
    var myApp = 'https://proyectoairbnb.herokuapp.com/users/ingresar' // en realidad seri myApp

    $scope.ingresar = function() {
        var usuario = $scope.emailRegistro;
        var clave = $scope.passwordRegistro;
        var data = {
            email: usuario,
            password: clave
        };        
        $http.post(myApp,data)
            .then(function(respuestaDeMyBase) {
                console.log('funciono'+respuestaDeMyBase);
                alert('bienvenido');
            }, function(error) {
                alert(error.data.error);
                console.log('error: '+error);
            })
        $state.go('home');
    }
})