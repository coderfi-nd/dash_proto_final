angular.module('dashboard').factory('Set1', ['$http', function ($http) {
// lets not do resource for now, we do not have backend

	
	var data = [[{'id':0, 'name': 'Bob'}, {'id': 2, 'name': 'Karl'}, {'id':3, 'name': 'Tony'}], [3, 4, 5], [4, 5, 6]];
	return data;
	
}]);