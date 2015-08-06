angular.module("dashboard", ['ngResource', 'ui.router'])

.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams ){
	$rootScope.$state = $state;	
	$rootScope.$stateParams = $stateParams;

}])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){

	// route injection
	$urlRouterProvider

		.when('', '/')

		.when('/set1', '/set1')

		.when('/set1/:id', 'set1/:id')

		.when('/set2/:id', '/set2/:id')

		.otherwise('/');

		// state injection
		$stateProvider

			.state('home', {

				url: '/',
				template: '<h1>Click on sets to move between visualization apps</h1>'
			})

		.state('set1', {

		// gets activated if one of it's children is activated, never activated explicitly
		abstract : true,
		url:'/set1',

		// is used to resolve async controller dependeincies (Set1Getter)
		resolve: {
			Set1_Getter: ['Set1_Getter', 
			function(Set1_Getter) {
				return Set1_Getter.all();
			}]

		},

		controller: 'set1_index_controller',
		templateUrl: 'app/views/set1_view.html'

			})

		// state will become active when parent is naviagated to 
		.state('set1.list', {
			url:'',
			templateUrl: 'app/views/set1_view.list.html'
		})

		.state('set1.list.detail', {
			url:'/{contactId:[0-9]{1,4}}',
			controller: 'set1_detail_controller',
			templateUrl: 'app/views/set1_view.list.detail.html'

		})

		.state('set1.list.detail.edit', {
			url:'/edit',
			controller: 'set1_edit_controller',
			templateUrl: 'app/views/set1_view.list.detail.edit.html'

		})

		.state('set1.new', {
			url:'/new',
			controller: 'set1_create_controller',
			templateUrl: 'app/views/set1_view.new.html'

		})

	.state('set2', {
			url: '/set2',
			controller:'set2_index_controller',
			templateUrl:'/views/set2_view.html'
		})

	.state('set2.detail', {
			url: '/set2/{id:int}',
			controller:'set2_show_controller',
			templateUrl:'/views/set2_view.detail.html'
		})

	.state('set2.detail.edit', {

		url:'/set2/{id:int}/edit',
		controller:'set2_edit_controller',
		templateUrl:'views/set2_view.detail.edit.html'

	})

	.state('set2.new', {
			url:'/set2/new',
			controller: 'set2_create_controller',
			templateUrl: '/views/set2_view.new.html'

		})

	.state('set3', {
		url:'/set3',
		templateUrl: '/views/set3_view.html'
	})
}]);