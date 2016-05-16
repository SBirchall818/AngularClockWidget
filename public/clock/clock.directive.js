(function() {
    angular.module('app', [])
        .directive('clock', function($interval) {
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
                
                var tick = function() {
                    var now = moment();
                    scope.hours = now.format('hh');
                    scope.minutes = now.format('mm');
                    scope.seconds = now.format('ss');
                };
                $interval(tick, 1000);
            }
        });
})();