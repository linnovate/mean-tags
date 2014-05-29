'use strict';

angular.module('mean').filter('autoCompleteTags', function() {
	return function(title, tag) {
		var r = new RegExp(tag, 'i');
		if (title)
			return title.replace(r, '');
		return '';
	};
});