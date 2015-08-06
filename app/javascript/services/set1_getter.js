
// A RESTful factory for retrieving contacts from 'contacts.json'
angular.module('dashboard').factory('Set1_Getter', ['$http', 'Utils', function($http, Utils){

	var path = 'data/contacts.json';
	var contacts = $http.get(path).then(function (resp){
		return resp.data.contacts;

	});

	var factory = {};
	factory.all = function() {

		return contacts;
	};
	
	factory.get = function (id) {
		return contacts.then(function () {
			return Utils.findById(contacts, id);

		})

	};

	return factory;

}]);






