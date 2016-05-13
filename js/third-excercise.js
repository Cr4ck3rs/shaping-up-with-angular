(function(){
  angular.module('myApp', []);

  angular.module('myApp')
  .controller('FirstCtrl', FirstCtrl);

  function FirstCtrl($scope) {
    $scope.data = {message : "alert alert-danger"};
  }
})();
