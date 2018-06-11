app.controller('MainController',['$scope' ,'contractInfo',function($scope,contractInfo){
  console.log("hi");
  const contract_address = contractInfo.addr;
  const callBackUrl = contractInfo.url;
  const nebPay = contractInfo.nebPay;
  const updateTopics = function(){ alert('hi')}
  
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

  $scope.test = function(){
    nebPay.simulateCall(contract_address, 0, "getTopics", null, {
        listener: updateTopics
    });
  }

}])
