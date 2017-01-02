(function () {
	'use strict';

	angular.module('MenuApp')
		.component('itemComp', {
			templateUrl: 'items.html',
			bindings: {
				itemsData: "<"
			}

		});



})();
