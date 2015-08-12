angular.module('dashboard').controller('set1_create_controller', ['$scope', function ($scope) 
{		
		$scope.currentType = "nig";
		$scope.changeType = function currentType(type){

			$scope.currentType = type;
		}

}]);

