angular.module('app', [])
    .directive('clock', function() {
        var directive = {
            replace: false,
            restrict: 'EA',
            templateUrl: 'clock/clock.html',
            link: link
        };

        return directive;

        function link(scope, elem, attrs) {
            scope.hours = 10;
            scope.minutes = 08;
            scope.seconds = 23;
        }
    });