(function() {
    angular.module('app', [])
        .directive('clock', function($timeout) {
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
                    $timeout(tick, 1000);
                };
                $timeout(tick, 1000);
            }
        });
})();