angular.module('dashboard').factory('LCI', ['$http', function ($http) {

	var lci = $http.get('/lci').then(function(resp) {
		
	});

});