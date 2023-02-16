// Cau lenh khoi tao 1 module
var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {})
  // Co the tu dinh nghia tỏng file rieng xong nhung vao hoac viet luon trong day
  // ten diẻctives. Viet theo lac da
  .directive("welcomeText", function () {
    return { template: "<h1>ahihihi</h1>" };
  });
