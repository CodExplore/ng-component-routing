(function () {
	'use strict';

	angular.module('MenuApp')
		.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RoutesConfig($stateProvider, $urlRouterProvider) {

		// Redirect to tab 1 if no other URL matches
		$urlRouterProvider.otherwise('/');

		// Set up UI states
		$stateProvider
			.state('home', {
				url: '/',
				template: 'Welcome to the Home Page'
			})
			.state('categories', {
				url: '/main-categories',
				templateUrl: 'main-category.html',
				controller: 'catControl as catLabel',
				resolve: {
					catData: ['MenuDataService', function (MenuDataService) {
						return MenuDataService.getAllCategories();
					}]
				}
			}).state('items', {
				url: '/items/{itemId}',
				templateUrl: 'item-details.html',
				controller: 'itemControl as itemDetails',
				resolve: {
					itemData: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
						return MenuDataService.getItemsForCategory().then(function (items) {
							return items[$stateParams.itemId];

						});
				}]
				}
			});
	}

})();
