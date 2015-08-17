angular.module('MyApp', [
  'ngRoute'
]);

angular.module('MyApp').config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/forms', {
            templateUrl: '/form-list.html',
            controller: 'IndexListController'
        }).
        when('/forms/:formId', {
            templateUrl: 'form-detail.html',
            controller: 'IndexDetailController',
            controllerAs: 'ctrl'
        }).
        otherwise({
            redirectTo: '/forms'
        });
  }]);
