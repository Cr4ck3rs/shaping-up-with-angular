(function(){
  var tab = angular.module('tab', []);
  tab.directive('tab', function(){
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'tab.html',
      require: '^tabset',
      scope: {
        heading: '@'
      },
      link: function(scope, elem, attr, tabsetCtrl) {
        scope.active = false;
        tabsetCtrl.addTab(scope);
      }
    };
  });
  tab.directive('tabset', function() {
    return {
      restrict : 'E',
      tranclude : true,
      scope: {
        type: '@'
      },
      templateUrl: 'tabset.html',
      bindToController: true,
      controllerAs: 'tabsett',
      controller: function() {
        var self = this;
        self.tabs = [];
        self.classes = {};

        if(self.type === 'pills') {
          self.classes['nav-pills'] = true;
        }
        else {
          self.classes['nav-tabs'] = true;
        }
        
        self.addTab = function (tab){
          self.tabs.push(tab);

          if(self.tabs.length === 1) {
            tab.active = true;
          }
        };
        self.select = function(selectedTab) {
          angular.forEach(self.tabs, function(tab) {
            if(tab.active && tab !== selectedTab) {
              tab.active = false;
            }
          });

          selectedTab.active = true;
        };
      }
    };
  });
})();
