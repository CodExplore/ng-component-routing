(function () {
	'use strict';


	angular.module('MenuApp')
		.controller('itemControl', itemControl);
	itemControl.$inject = ['itemData'];

	function itemControl(itemData) {
		var itemLabel = this;
		itemLabel.itemsData = itemData;
	}

})();
