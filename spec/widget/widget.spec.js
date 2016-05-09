describe('widget directive', function() {
    var compile, scope, templateCache, directiveElem, template;

    beforeEach(function() {
        module('app');

        inject(function ($templateCache, $compile, $rootScope) {
            templateCache = $templateCache;

            template = __html__['public/widget/widget.html'];   // How the file is referenced in the project root.
            templateCache.put('widget/widget.html', template);  // How the file is referenced in the js file contraining the directive

            compile = $compile;
            scope = $rootScope.$new();
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement() {
        var compiledDirective = compile(angular.element('<widget></widget>'))(scope);
        scope.$digest();
        return compiledDirective;
    }

    it('should pass', function () {
        expect(true).toEqual(true);
    });

    it('contain the sample widget text', function() {
        var findh1 = directiveElem.find('h1');
        expect(findh1.text()).toEqual('Sample Widget');
    });
});