// Cau lenh khoi tao 1 module
var myApp = angular.module("myModule", []);

myApp.controller("classController", classController);

myApp.controller("schoolController", schoolController);

myApp.controller("topController", topController);

function classController($scope, $rootScope) {
  // $scope.name = "Hang";
  // $scope.sayHello = function () {
  // $scope.name = "hello" + $scope.name;
  // };
  // $rootScope.name = "Day la bien toan cuc";
}

function schoolController($scope, $rootScope) {
  // $scope.name = "Chill controller";
  // $scope.sayHello = function () {
  //   $scope.name = "hello" + $scope.name;
  // };
}

function topController($scope) {
  $scope.name = "Controller ben ngoai";
}
