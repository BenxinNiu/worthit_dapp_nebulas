app.directive("functionalBar",function($state){
  return {
    restrict: 'E',
    scope: {
      info : '='
    },
    templateUrl: "js/directives/html/functionalBar.html",
    link: function($state, scope, element, attrs) {
      scope.go = function(page){
        console.log('hi')
        $state.go(page);
      }
      scope.expand_bar=function(){
        $('#searchbar-input').animate({width: 'toggle'});
        $("#searchbar-icon").toggle();
        $("#searchbar-cross").toggle(500);
        $('#searchbar-submit').toggle(100);
    };
      scope.hide_bar=function(){
        $('#searchbar-input').animate({width: 'toggle'});
        $("#searchbar-cross").toggle();
        $('#searchbar-submit').toggle();
        $("#searchbar-icon").toggle(500);
      };
}
  }
})
