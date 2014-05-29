'use strict';

angular.module('mean').controller('MeanTagsController', ['$scope', 'Global',
    function($scope, Global) {
        $scope.global = Global;
        $scope.meanTags = {
            name: 'mean-tags'
        };
    }
]);
