app.controller('MainController',['$scope' ,'$state' ,'contractInfo',function($scope,$state, contractInfo){
  const contract_address = contractInfo.addr;
  const callBackUrl = contractInfo.url;
  const nebPay = contractInfo.nebPay;
  const updateTopics = function(res){
      if(typeof(res)==='string' && resp.startsWith('Error')){
          alert("Ooops...Something went wrong, Please tey again later....")
      }
    //let data = JSON.parse(res);
    console.log(JSON.parse(res.result));
    //$scope.usr_topic = data;
  };
  const checkExtension = function(){
      let extension_stats = typeof(webExtensionWallet);
      if (extension_stats === "undefined"){
          alert("Nebulas Wallet Extesion not installed...");
      }
  };

  checkExtension();
  
  $scope.title="Topics Board";
  $scope.usr_topics=[
  {
    name: 'Studying at MUN',
    worthit: true,
    exp_date: new Date('2014', '03', '08'),
    story: "fbhbfdbaslbdbashf safh acxbhvdfh halvfav fhdvaflahfhasvfljash mnxhcjvahvfhasvs dsadasg dsafgsa sdasdsa " ,
    tag: "study",
    likes:0,
    dislikes:0,
    logo: "public/logo/a4.png"
  },
  {
    name: 'Buying a Mustang',
    worthit: false,
    exp_date: new Date('2013', '08', '01'),
    tag: "Shoping",
    story: "fbhbfdbaslbdbashf safh acxbhvdfh halvfav fhdvaflahfhasvfljash mnxhcjvahvfhasvs dsadasg dsafgsa sdasdsa  " ,
    likes:0,
    dislikes:0,
    logo: "public/logo/a10.png"
  }
];

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

    $scope.test = function(){
    nebPay.simulateCall(contract_address, 0, "getTopics", null, {
        listener: updateTopics
    });
  }

}])
