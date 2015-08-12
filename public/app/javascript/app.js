angular.module("dashboard", ['ngResource', 'ui.router', 'ngHTML5Storage', 'nvd3'])

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

		// is used to resolve async controller dependeincies
			resolve: {

				Widget: ['Widget', function(Widget) {
					return Widget;

				}]

			},

		controller: 'set1_index_controller',
		templateUrl: 'app/views/set1_view.html'

			})

		// state will become active when parent is naviagated to 
		.state('set1.list', {
			resolve: {
				WidgetLoader:['WidgetLoader', 
				function(WidgetLoader) {
					return WidgetLoader.all();

				}]
			},

			url:'',
			controller: 'set1_list_controller',
			templateUrl: 'app/views/set1_view.list.html'
		})

		.state('set1.list.detail', {
			url:'/{id:[0-9]{1,4}}',
			controller: 'set1_detail_controller',
			templateUrl: 'app/views/set1_view.list.detail.html'

		})

		// replace a detail view with an edit view
		// the view accepts a title stateParameter passed from a parent state
		.state('set1.list.detail.edit', {

			views: {
				'@set1.list': {
					// have to explicitly metion id here otherwise, won't pass
					url: '/{id:[0-9]{1,4}}',
					templateUrl: 'app/views/set1_view.list.detail.edit.html',
					controller: 'set1_edit_controller'
				}

			}
			
		})
		.state('set1.new', {
			url:'/new',
			controller: 'set1_create_controller',
			templateUrl: 'app/views/set1_view.new.html'

		})

		.state('set1.new.data', {
			url:'/data',
			controller: 'set1_create_data_controller',
			templateUrl: 'app/views/set1_view.new.data.html'

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