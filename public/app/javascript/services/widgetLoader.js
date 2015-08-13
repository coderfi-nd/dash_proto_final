
angular.module('dashboard').factory('WidgetLoader', ['$http', function ($http) {

	// this service should get widgets from the database and templates from other service

	var widgets = $http.get('/set1').then(function (resp){
		return resp.data;
		
	});


	var factory = {};

	factory.all = function() {
		return widgets;

	};

	return factory;
	}]);
