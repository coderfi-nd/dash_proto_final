angular.module('dashboard').controller('set1_detail_controller', ['$scope', '$stateParams', '$state', 'Utils', function ($scope, $stateParams, $state, Utils) 
{
	// do not need to call for service again, just pass parameters
	$scope.chart = Utils.findById($scope.charts, $stateParams.id);
	// go back to a relative parent
	$scope.back = function() {
		$state.go('^');
	};

}]);