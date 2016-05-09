angular.module('app', [])
    .directive('widget', function() {
        return {
            replace: false,
            restrict: 'EA',
            templateUrl: 'widget/widget.html'
        };
    });