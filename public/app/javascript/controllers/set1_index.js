angular.module('dashboard').controller('set1_index_controller', function ($scope, Set1_Getter)
{	

	// pass data factory to the index scope
	$scope.charts = Set1_Getter;

	// myStorageService.saveStuffInLocalStorage(key, JSON.stringify(value))
	// .then(function(data){
	// 	alert("Saved");

	// });

 // myStorageService.getStuffFromLocalStorge(key)
 // 	.then(function(data) {
 // 		return JSON.parse(data);
 // 	});

 // 	myStorageService.removeStuffFromLocalStorage(key)
 // 	.then(function(data){

 // 		alert("Removed");

 // 	});

});