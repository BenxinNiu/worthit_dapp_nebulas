app.directive("logoAvator",function(){
  return {
    restrict: 'E',
    scope: {
      info : '='
    },
    templateUrl: "js/directives/html/logos.html"
  }
})
