angular.module('dashboard').controller('set1_detail_controller', ['$scope', '$stateParams', 'Utils', function ($scope, $stateParams, Utils) 
{
	// do not need to call for service again, just pass parameters
	$scope.contact = Utils.findById($scope.contacts, $stateParams.contactId);

}]);