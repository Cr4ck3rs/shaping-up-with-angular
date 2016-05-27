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
    var link = function(scope, element){
      this.messages = [
        "Sorry, the shopping cart is not implemented",
        "Hey, I told you, it's not ready",
        "Stop that! It's anoying",
        "I'm getting really really angry",
        "YEarghhh!!!!"
      ];

      scope.messages = this.messsages;
      scope.clickCounter = 0;
      scope.incrementCount = function(){
        scope.clickCounter++;
      };

      $templateRequest("ng-templates/app/cart-counter.html").then(function(html){
        this.template = angular.element(html);
        element.append(template);
        $compile(template)(scope);
      });

      var unbindWatcher = scope.$watch(
        "clickCounter",
        function(newClickCounter){
          console.log("I've been watching you... alalalong");
          if (newClickCounter >= 5) {
            console.log("I'm blind augh the agony");
            var cartButton = this.template.children('.btn');
            var messageElement = this.template.children('.text-info');
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
