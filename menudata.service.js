(function () {
	'use strict';

	angular.module('data')
		.service('MenuDataService', MenuDataService)
		.constant('ApiBase', 'https://davids-restaurant.herokuapp.com');

	MenuDataService.$inject = ['$http', 'ApiBase'];

	function MenuDataService($http, ApiBase) {
		var service = this;
		var cat = [];
		var foundItems = [];
		service.getAllCategories = function () {


			var response = $http({
				method: "GET",
				url: (ApiBase + "/categories.json")
			});

			return response.then(function (response) {
				return cat = response.data;
			});
		};
		service.getItemsForCategory = function (categoryShortName) {

			return $http({
				method: "GET",
				url: (ApiBase + "/menu_items.json?category=" + categoryShortName),
			}).then(function (response) {
				return response.data.menu_items;
			});
		};
	}

})();
