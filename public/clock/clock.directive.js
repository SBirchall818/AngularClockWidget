angular.module('app', [])
    .directive('clock', function() {
        return {
            replace: false,
            restrict: 'EA',
            templateUrl: 'clock/clock.html'
        };
    });