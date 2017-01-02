(function () {
	'use strict';

	angular.module('MenuApp')
		.component('categoryList', {
			templateUrl: 'categories.html',
			bindings: {
				catyData: '<'
			}

		});



})();
