app.directive("introInfo", function(){
  return {
    restrict: 'E',
    scope: {
      info : '='
    },
    templateUrl: "js/directives/html/introInfo.html",
    link: function(scope, element, attrs) {
      scope.expand_faq=function(){
          $(".faq").toggle(500)
      };
}
  }
})
