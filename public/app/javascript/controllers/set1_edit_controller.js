angular.module('dashboard').controller('set1_edit_controller', ['$scope', '$stateParams', '$state', 'Utils', function ($scope, $stateParams, $state, Utils){

	// note that $scope.charts is in scope because we are currently in set1_view.list.html ng-view. 
	// we get chart by passing id
	$scope.chart = Utils.findById($scope.charts, $stateParams.id);
	// return up one state - back to detail


	$scope.done = function () {
	$state.go('^', $stateParams);

	};

	$scope.validate = function (valid) {

		if(!valid){
			return "ng-invalid ng-dirty";
		}

		return "ng-valid ng-dirty";

	};


}]);