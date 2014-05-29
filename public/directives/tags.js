'use strict';

angular.module('mean.system').directive('meanTags', ['Tags',
	function(Tags) {
		return {
			restrict: 'A',
			require: '?ngModel',
			templateUrl: 'mean-tags/views/tags.html',
			scope: {
				meanTags: '=ngModel'
			},
			replace: true,
			link: function(scope, elem, attrs) {
				scope.$watch('tag', function() {
					if (scope.tag && scope.tag.length > 0) {
						scope.getTagOptions();
					} else {
						scope.option = {};
					}
				});

				scope.getTagOptions = function() {
					scope.option = {};
					var exists = false;
					Tags.query({
						query: 'word=' + scope.tag
					}, function(tags) {
						for (var i = 0; i < tags.length; i++) {
							for (var j = 0; j < scope.meanTags.length; j++) {
								if (tags[i]._id === scope.meanTags[j]._id) {
									exists = true;
									break;
								}
							}
							if (!exists) {
								scope.option = tags[i];
								break;
							} else {
								exists = false;
							}
						}
					});
				};

				scope.addTag = function() {
					if (scope.tag && scope.tag !== '') {
						var i, exists = false;
						if (!scope.option || scope.option.title !== scope.tag) {
							for (i = 0; i < scope.meanTags.length; i++) {
								if (scope.meanTags[i].title === scope.tag) exists = true;
							}
							if (!exists) {
								var tag = new Tags({
									title: scope.tag
								});
								tag.$save(function(tag) {
									scope.meanTags.push(tag);
								});
							}
						} else {
							for (i = 0; i < scope.meanTags.length; i++) {
								if (scope.meanTags[i]._id === scope.option._id) exists = true;
							}
							if (!exists) scope.meanTags.push(scope.option);
						}
						scope.tag = '';
						scope.option = {};
						document.getElementById('tagInput').focus();
					}
				};

				scope.removeTag = function(index) {
					scope.meanTags.splice(index, 1);
				};

				elem.bind('keydown', function($event) {
					var keyIdentifier = $event.keyIdentifier;
					switch (keyIdentifier) {
						case 'U+0009':
							if (scope.option && scope.option.title) scope.tag = scope.option.title;
							break;
							// default:

					}
				});

				elem.bind('keyup', function($event) {
					var element = $event.target;
					element.style.width = '14px';
					var width = element.scrollWidth;
					element.style.width = width + 14 + 'px';
				});

				elem.bind('mousedown', function($event) {
					if ($event.target.tagName === 'DIV') {
						document.getElementById('tagInput').focus();
					}
				});
			}
		};
	}
]);