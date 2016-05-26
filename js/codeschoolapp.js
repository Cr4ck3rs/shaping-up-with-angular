(function(){

  // This is how to manually bootstrap the application to angular
  // Don't us ng-app alongside this
  angular.element(document).ready(function() {
    angular.bootstrap(angular.element("body")[0], ['store'], {
      strictDi: true
    });
  });

  var store = angular.module('store', ['store-products']);

  // using the ['dependency', function(dependency)] is called inline injection.
  // you could also use controller.$inject = [dependecies array].
  // implicit injection(not anotating them) should be avoided as
  // it can cause problems when minifying.
  store.controller('StoreController', ['$http', function($http){
    var vm = this;
    vm.products = [];
    vm.addToCart = function(product){
      console.log("Aded a " + product.name + " product");
    };

    //$http is an angular built in service
    $http.get('json/products.json').success(function(data){
      vm.products = data;
    });
  }]);

  store.filter('capitalize', function(){
    return function (text) {
      return text.toUpperCase();
    };
  });
})();
