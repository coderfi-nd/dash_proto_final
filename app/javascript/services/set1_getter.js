
// A RESTful factory for retrieving contacts from 'contacts.json'
angular.module('dashboard').factory('Set1_Getter', ['$http', 'Utils', function($http, Utils){

	var path = 'data/charts.json';
	var charts = $http.get(path).then(function (resp){
		return resp.data.charts;

	});

	var factory = {};
	factory.all = function() {

		return charts;
	};



	factory.get = function (id) {
		return charts.then(function () {
			return Utils.findById(charts, id);

		})

	};

	return factory;

}]);






