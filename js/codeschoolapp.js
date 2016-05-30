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
    vm.addedProducts = [];
    vm.addToCart = function(productObj){
      console.log("Aded a " + productObj.name + " product");
      vm.addedProducts.push(productObj);
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

  store.directive("appCartCounter", ['$templateRequest', '$compile', function($templateRequest, $compile){
    var cartMessages = [
      "Sorry, the shopping cart is not implemented",
      "Hey, I told you, it's not ready",
      "Stop that! It's anoying",
      "I'm getting really really angry",
      "YEarghhh!!!!"
    ];
    var link = function(scope, element){
      scope.messages = cartMessages;
      scope.clickCounter = 0;
      scope.incrementCount = function(){
        if (scope.clickCounter<5) {
          scope.clickCounter++;
        }
      };

      $templateRequest("ng-templates/app/cart-counter.html").then(function(html){
        scope.template = angular.element(html);
        element.append(scope.template);
        $compile(scope.template)(scope);
      });

      var unbindWatcher = scope.$watch(
        "clickCounter",
        function(newClickCounter){
          if (newClickCounter >= 5) {
            var cartButton = scope.template.children()[0];
            var messageElement = scope.template.children()[1];
            console.log(cartButton);
            console.log(messageElement);
            console.log(scope.template.children()(0));
            console.log(scope.template.children()(1));

            cartButton.toggleClass('btn-success');
            cartButton.toggleClass('btn-danger');
            cartButton.toggleClass('btn-lg');

            messageElement.toggleClass('text-info');
            messageElement.toggleClass('text-danger');
            messageElement.toggleClass('text-capitalize');
            messageElement.toggleClass('lead');

            unbindWatcher();
          }
        }
      );

    };

    return {
      restrict: 'E',
      scope: {
        'addedProducts' : '='
      },
      replace: 'true',
      link: link
    };
  }]);
})();
