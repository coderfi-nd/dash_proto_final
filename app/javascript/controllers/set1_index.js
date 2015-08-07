angular.module('dashboard').controller('set1_index_controller', function ($scope, Set1_Getter)
{	

	// pass data factory to the index scope
	$scope.charts = Set1_Getter;
	

});