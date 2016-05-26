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
        scope.glyphicon = attr.glyphicon;
        tabsetCtrl.addTab(scope);
      }
    };
  });
  tab.directive('tabset', function() {
    return {
      restrict : 'E',
      transclude : true,
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
          tab.classes = {};

          if(self.tabs.length === 1) {
            tab.active = true;
          }
          if(tab.glyphicon !== undefined){
            tab.classes['glyphicon'] = true;
            tab.classes['glyphicon-' + tab.glyphicon] = true;
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
