(function(){
  var tab = angular.module('tab', []);
  tab.directive('tbTab', function(){
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'ng-templates/tb/tab.html',
      require: '^^tbTabset',
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
  tab.directive('tbTabset', function() {
    return {
      restrict : 'E',
      transclude : true,
      scope: {
        type: '@'
      },
      templateUrl: 'ng-templates/tb/tabset.html',
      bindToController: true,
      controllerAs: 'tabsetCtrl',
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
          if(!angular.isUndefined(tab.glyphicon)){
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
