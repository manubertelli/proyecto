angular.module('proyectoApp', ['ui.router']);
var modulo = angular.module('proyectoApp');


//define las rutas
modulo.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'myTemplates/seccionHome.html', controller:'HomeCtrl'
	});
	$stateProvider.state('resultados',{
		url:'/resultados?q',
		templateUrl:'myTemplates/seccionResultados.html', controller:'ResultadosCtrl'
	});

	$urlRouterProvider.otherwise('/home'); //si no encuentra ruta va al /home o lo que pongas ahí (404)
})

// recibe el valor del input y te envia resultados
modulo.controller('HomeCtrl', function($scope, $state){
	$scope.irAlResultado =function(){
		var query = $scope.parametroDeBusqueda; //le da el valor del input a la variable query

		$state.go('resultados',{ q:query }) //le atribuye el valor de la variable query a la key q

		console.log($scope.parametroDeBusqueda) //comprueba el valor que le atribuye a query
	}
})






modulo.controller('ResultadosCtrl',function($stateParams,$scope,$http){
	var url = 'https://api.mercadolibre.com/sites/MLA/search?q='+ $stateParams.q;

	$http.get(url)
	.then(function(respuestaDelServer){
		$scope.resultados = respuestaDelServer.data.results;
	})
	.catch(function(){
		console.log('todo mal');

	})
	.finally(function(){
		console.log('finalmente');
	})
	console.log(url)
})



// modulo.controller('MainCtrl',function($rootScope,$scope){
// 	$rootScope.$on('$stateChangeStart', 
// 	function(event, toState, toParams, fromState, fromParams){ 
// 	    $scope.stateName = toState.name;
// 	    console.log($scope.stateName)
// 	})
// })
