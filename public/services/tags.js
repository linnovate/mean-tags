'use strict';

angular.module('mean').factory('Tags', ['$resource',
	function($resource) {
		return $resource('/tags?:query', {
			query: '@query'
		});
	}
]);