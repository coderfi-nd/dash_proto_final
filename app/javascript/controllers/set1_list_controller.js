angular.module('dashboard').controller('set1_list_controller', function ($scope, Set1)
{
	// Set1.all()
	// .success(function(data) {
	// 	$scope.data = data;
	// });
	
	$scope.data = Set1;
	
});