app.directive('topicsCard', function(){
  return {
    restrict: 'E',
    scope:{
      info: "="
    },
    templateUrl: "js/directives/html/topicCard.html",
    link: function(scope, element, attrs) {
      scope.plusOne=function(index){
      this.info.likes += 1;
    };

    scope.minusOne=function(index){
    this.info.dislikes += 1;
    };
}
  };
})
