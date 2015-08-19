// controller for form-list.html
angular.module('MyApp').controller('IndexListController', ['$scope', '$http',
function ($scope, $http) {
        $http.get("forms.json").success(function (data) {
            $scope.info = data;
        });
}]);

// controller for form-detail.html
angular.module('MyApp').controller('IndexDetailController', ['$scope', '$routeParams', '$http',
function ($scope, $routeParams, $http) {
        $http.get($routeParams.formId + '.json').success(function (data) {
            $scope.info = data;

            // cities name list
            $scope.cities = ["bkk", "xiang", "robroo", "hehe", "huhu"];
            $scope.selectcity = $scope.cities[0];

            // gender list
            $scope.genders = ["female", "male"];
            $scope.selectgender = $scope.genders[0];

            // email sample
            $scope.email = {
                text: ''
            };
        });
  }]);
