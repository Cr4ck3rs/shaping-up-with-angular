(function(){
  var store = angular.module('store', ['store-products']);

  store.controller('StoreController', ['$http', function($http){
    var vm = this;
    vm.products = [];

    $http.get('json/products.json').success(function(data){
      vm.products = data;
    });
  }]);
})();
