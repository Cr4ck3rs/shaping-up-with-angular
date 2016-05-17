(function(){
  var store = angular.module('store-products', []);

  store.directive("productPanels", function(){
    return {
      restrict: 'E',
      templateUrl: "product-panels.html",
      controller: function(){
        this.tab = 1;

        this.selectTab = function(setTab) {
          this.tab = setTab;
        };

        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
      },
      controllerAs: "panel"
    };
  });

  store.directive("productDescription", function(){
    return {
      restrict: 'E',
      templateUrl: "product-description.html"
    };
  });

  store.directive("productSpecs", function(){
    return {
      restrict: 'E',
      templateUrl: "product-specs.html"
    };
  });

  store.directive("productReviews", function(){
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  });

  store.directive("productReviewForm", function(){
    return {
      restrict: 'E',
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
      templateUrl: "product-title.html"
    };
  });

  store.directive("productGallery", function(){
    return {
      restrict: 'E',
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
