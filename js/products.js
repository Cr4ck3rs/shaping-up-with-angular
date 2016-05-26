
(function(){
  var store = angular.module('store-products', ['tab']);

  store.directive("productPanels", function(){
    return {
      restrict: 'E',
      templateUrl: "product-panels.html",
      scope: { "product" : "=" }
    };
  });

  store.directive("productDescription", function(){
    return {
      restrict: 'E',
      scope: { "product" : "=" },
      templateUrl: "product-description.html"
    };
  });

  store.directive("productSpecs", function(){
    return {
      restrict: 'E',
      scope: { "product" : "=" },
      templateUrl: "product-specs.html"
    };
  });

  store.directive("productReviews", function(){
    return {
      restrict: 'E',
      scope: { "product" : "=" },
      templateUrl: "product-reviews.html"
    };
  });

  store.directive("productReviewForm", function(){
    return {
      restrict: 'E',
      scope: { "product" : "=" },
      templateUrl: "product-review-form.html",
      controller: function(){
        this.review = {};

        this.addReview = function(product){
          this.review.createdOn = Date.now();
          product.reviews.push(this.review);
          this.review = {};
          this.reviewForm.$setPristine();
        };
      },
      controllerAs: "reviewCtrl"
    };
  });

  store.directive("productTitle", function(){
    return {
      restrict: 'E',
      scope: {
        "product" : "=",
        "addToCart": "&addtocart"
      },
      templateUrl: "product-title.html"
    };
  });

  store.directive("productGallery", function(){
    return {
      restrict: 'E',
      scope: { "product" : "=" },
      templateUrl: "product-gallery.html",
      controller: function(){
        this.current = 0;
        this.setCurrent = function(newGallery){
          this.current = newGallery || 0;
        };
      },
      controllerAs: "gallery"
    };
  });
})();
