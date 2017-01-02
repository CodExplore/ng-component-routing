(function () {
	'use strict';


	angular.module('MenuApp')
		.controller('catControl', catControl)


	catControl.$inject = ['catData'];

	function catControl(catData) {
		var catLabel = this;
		catLabel.catyData = catData;
	}

})();
