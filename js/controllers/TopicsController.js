app.controller('TopicsController',['$scope' ,'contractInfo',function($scope,contractInfo){
  const generate_logo_list = function(){
    var list = [];
    for (var i=1; i<=20; i++)
      list.push("public/logo/a" + i.toString() + ".png")
    return list;
};

$scope.logo_list=generate_logo_list();

}
])
