angular.module('MyApp', [
  'ngRoute'
]);
// routing and layout for form-list view and form-detail vieww
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
