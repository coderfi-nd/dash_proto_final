
angular.module('dashboard').factory('WidgetLoader', function () {

	// this service should get widgets from the database
	return {
		all: function() {
			return $http({method: "GET", url:'/set1'});
		}

		}
	});
