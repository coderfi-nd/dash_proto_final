
angular.module("dashboard").factory('myStorageService', ['ngHTML5Storage',function(ngHTML5Storage) {
	
	return {
		saveStuffInLocalStorage : function(key, value){

			return ngHTML5Storage.local(key, value);
		},

		getStuffFromLocalStorge : function(key) {

			return ngHTML5Storage.local(key);
		},

		removeStuffFromLocalStorage: function(key) {


			return ngHTML5Storage.remove.local(key);
		}
	};
}]);

