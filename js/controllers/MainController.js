app.controller('MainController',['$scope' ,'$state' ,'contractInfo' ,function($scope,$state,contractInfo){

  const contract_address = contractInfo.addr;
  const callBackUrl = contractInfo.url;
  const nebPay = contractInfo.nebPay;

  const searchFactory = function(query,data){
      let result = [];
      data.forEach(function(topic){
      if(query.toString().includes(topic.id.toString()) ||
              topic.title.includes(query.toString()) ||
              topic.tag.includes(query.toString()) ||
              topic.story.includes(query.toString()) )
              result.push(topic);
      });
            return result;
  };

  const updateTopics = function(res){
      if(typeof(res)==='string' && res.startsWith('Error')){
          alert("Ooops...Something went wrong, Please tey again later....")
      }
   let raw = JSON.parse(res.result);
   const cooked = JSON.parse(raw);
   for (let i=0; i<cooked.data.length; i++){
       cooked.data[i].upvote_clicked = false;
       cooked.data[i].downvote_clicked = false;
       if (cooked.data[i].worthit === "true")
           cooked.data[i].worthit = true;
       else
           cooked.data[i].worthit = false;
   }
   $scope.usr_topics = cooked.data.reverse();
   //console.log($scope.usr_topics);
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

    $scope.searchBar = function(){
        let query = $("#searchbar-input").val();
        let result = searchFactory(query, $scope.usr_topics);
        if(result.length === 0 ){
            $scope.no_result = true;
            $scope.no_result_msg = "No search result returned for: " + '"' + query + '"';
            $state.go('landing');
        }
        else{
            $scope.no_result = true;
            $scope.no_result_msg = "Total " + result.length + " related Topics found for you.."
            $scope.usr_topics = result;
            $state.go('landing');
        }
    };

  $scope.no_result = false;
  $scope.no_result_msg = "";
  $scope.title="Topics Board";
  $scope.usr_topics=$scope.getTopics();

    $scope.go = function(page){
        $state.go(page);
    }
    $scope.expand_bar=function(){
        $('#searchbar-input').animate({width: 'toggle'});
        $("#searchbar-icon").toggle();
        $("#searchbar-cross").toggle(500);
        $('#searchbar-submit').toggle(100);
        $('#searchbar-input').focus();
    };
    $scope.hide_bar=function(){
        $scope.no_result = false;
        $scope.no_result_msg = "";
        $('#searchbar-input').animate({width: 'toggle'});
        $("#searchbar-cross").toggle();
        $('#searchbar-submit').toggle();
        $("#searchbar-icon").toggle(500);
    };


}])
