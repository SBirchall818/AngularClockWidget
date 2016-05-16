describe('clock directive', function() {
    var compile, scope, templateCache, directiveElem, template, now, interval;

    beforeEach(function() {
        module('app');

        inject(function ($templateCache, $compile, $rootScope, $interval) {
            templateCache = $templateCache;

            template = __html__['public/clock/clock.html'];   // How the file is referenced in the project root.
            templateCache.put('clock/clock.html', template);  // How the file is referenced in the js file contraining the directive

            compile = $compile;
            scope = $rootScope.$new();
            interval = $interval;
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement() {
        now = moment();
        var compiledDirective = compile(angular.element('<clock></clock>'))(scope);
        scope.$digest();
        return compiledDirective;
    }

    it('should pass', function () {
        expect(true).toEqual(true);
    });

    it('contain the sample clock text', function() {
        var findh1 = directiveElem.find('h1');
        expect(findh1.text()).toEqual('Sample Clock');
    });
    
    it('should have hours minute and seconds on the scope', function() {
        expect(scope.hours).toBeDefined();
        expect(scope.minutes).toBeDefined();
        expect(scope.seconds).toBeDefined();
    });
    
    it('should display hours minutes and seconds', function() {
        var queryResult = directiveElem[0].querySelector('.hours');		
        var wrappedQueryResult = angular.element(queryResult);		

        expect(wrappedQueryResult.text()).toEqual(scope.hours);

        queryResult = directiveElem[0].querySelector('.minutes');		
        wrappedQueryResult = angular.element(queryResult);		
        expect(wrappedQueryResult.text()).toEqual(scope.minutes);
        
        queryResult = directiveElem[0].querySelector('.seconds');		
        wrappedQueryResult = angular.element(queryResult);		
        expect(wrappedQueryResult.text()).toEqual(scope.seconds);
    });
    
    it('should update every second', function() {
        interval.flush(1000);
        
        expect(scope.hours).toEqual(now.format('hh'));
        expect(scope.minutes).toEqual(now.format('mm'));
        expect(scope.seconds).toEqual(now.format('ss'));
        
        scope.hours = undefined;
        scope.minutes = undefined;
        scope.seconds = undefined;
        
        interval.flush(1000);
       
        expect(scope.hours).toEqual(now.format('hh'));
        expect(scope.minutes).toEqual(now.format('mm'));
        expect(scope.seconds).toEqual(now.format('ss'));
    });
});