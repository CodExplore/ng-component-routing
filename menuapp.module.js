(function () {
	'use strict';

	angular.module('MenuApp', ['data', 'ui.router'])
		.controller('catControl', catControl)
		.controller('itemControl', itemControl);

	catControl.$inject = ['catData'];

	function catControl(catData) {
		var catLabel = this;
		catLabel.catyData = catData;
	}

	itemControl.$inject = ['itemData'];

	function itemControl(itemData) {
		var itemDetails = this;
		itemDetails.itemData = itemData;
		console.log("hello items");
	}

})();
