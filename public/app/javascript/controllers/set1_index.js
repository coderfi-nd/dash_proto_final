angular.module('dashboard').controller('set1_index_controller', function ($scope, Widget)
{	

	// pass data factory to the index scope
	$scope.templates = Widget;

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