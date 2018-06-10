app.directive("navBar",function(){
  return{
    restrict: 'E',
    scope: {
      info : '='
    },
    templateUrl:"js/directives/html/navBar.html"
  }
})
