// Cau lenh khoi tao 1 module
var myApp = angular.module("myModule", []);

// // c1: Ham cu the
// myApp.controller("myController", myController);

// // scope: la 1 service . Cau noi ket noi giua modal va view
// function myController($scope) {
//   $scope.message = "Angular JS Application";
// }

// https://codelearn.io/sharing/function-javascript
// C2: ham nac danh
myApp.controller("myController", function ($scope) {
  // $scope.message = "hihih";
  var employee = {
    firstName: "Hang",
    lastName: "Nguyen",
    gender: "Female",
  };
  // // scope: giong nhu nguoi van chuyen
  $scope.employee = employee;
  // function
  $scope.hello = function () {
    alert("hihihihii");
    $scope.sum =
      Number.parseInt($scope.number1) + Number.parseInt($scope.number2);
  };
  // mang
  $scope.info = ["hihi1", "hihi2"];
});
