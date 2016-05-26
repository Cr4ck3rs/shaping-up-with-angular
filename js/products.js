
(function(){
  var store = angular.module('store-products', ['tab']);

  store.directive("strProductPanels", function(){
    return {
      restrict: 'E',
      templateUrl: "ng-templates/str/product-panels.html",
      scope: { "product" : "=" }
    };
  });

  store.directive("strProductDescription", function(){
    return {
      restrict: 'E',
      scope: { "product" : "=" },
      templateUrl: "ng-templates/str/product-description.html"
    };
  });

  store.directive("strProductSpecs", function(){
    return {
      restrict: 'E',
      scope: { "product" : "=" },
      templateUrl: "ng-templates/str/product-specs.html"
    };
  });

  store.directive("strProductReviews", function(){
    return {
      restrict: 'E',
      scope: { "product" : "=" },
      templateUrl: "ng-templates/str/product-reviews.html"
    };
  });

  store.directive("strProductReviewForm", function(){
    return {
      restrict: 'E',
      scope: { "product" : "=" },
      templateUrl: "ng-templates/str/product-review-form.html",
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

  store.directive("strProductTitle", function(){
    return {
      restrict: 'E',
      scope: {
        "product" : "=",
        "addToCart": "&addtocart"
      },
      templateUrl: "ng-templates/str/product-title.html"
    };
  });

  store.directive("strProductGallery", function(){
    return {
      restrict: 'E',
      scope: { "product" : "=" },
      templateUrl: "ng-templates/str/product-gallery.html",
      controller: function(){
        this.current = 0;
        this.setCurrent = function(newGallery){
          this.current = newGallery || 0;
        };
      },
      controllerAs: "galleryCtrl"
    };
  });
})();
