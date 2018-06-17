app.controller('MainController',['$scope' ,'$state' ,'contractInfo',function($scope,$state, contractInfo){

  const contract_address = contractInfo.addr;
  const callBackUrl = contractInfo.url;
  const nebPay = contractInfo.nebPay;

  const updateTopics = function(res){
      if(typeof(res)==='string' && resp.startsWith('Error')){
          alert("Ooops...Something went wrong, Please tey again later....")
      }
   let raw = JSON.parse(res.result);
   const cooked = JSON.parse(raw);
   for (let i=0; i<cooked.data.length; i++){
       if (cooked.data[i].worthit === "true")
           cooked.data[i].worthit = true;
       else
           cooked.data[i].worthit = false;
   }
   $scope.usr_topics = cooked.data;
   console.log($scope.usr_topics);
   $state.go('landing');
  };

  const checkExtension = function(){
      let extension_stats = typeof(webExtensionWallet);
      if (extension_stats === "undefined"){
          alert("Nebulas Wallet Extesion not installed...");
      }
  };

  checkExtension();

    $scope.getTopics = function(){
        nebPay.simulateCall(contract_address, 0, "getTopics", null, {
            listener: updateTopics
        });
    };

  $scope.title="Topics Board";
  $scope.usr_topics=$scope.getTopics();

    $scope.go = function(page){
        console.log('hi');
        $state.go(page);
    }
    $scope.expand_bar=function(){
        $('#searchbar-input').animate({width: 'toggle'});
        $("#searchbar-icon").toggle();
        $("#searchbar-cross").toggle(500);
        $('#searchbar-submit').toggle(100);
    };
    $scope.hide_bar=function(){
        $('#searchbar-input').animate({width: 'toggle'});
        $("#searchbar-cross").toggle();
        $('#searchbar-submit').toggle();
        $("#searchbar-icon").toggle(500);
    };


}])
