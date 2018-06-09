app.controller('MainController',['$scope',function($scope){
  $scope.title="Topics Board";
  $scope.promo="Share your Experience together",
  $scope.products=[
  {
    name: 'Studying at MUN',
    worthit: true,
    exp_date: new Date('2014', '03', '08'),
    story: "fbhbfdbaslbdbashf safh acxbhvdfh halvfav fhdvaflahfhasvfljash mnxhcjvahvfhasvs dsadasg dsafgsa sdasdsa " ,
    likes:0,
    dislikes:0
  },
  {
    name: 'Buying a Mustang',
    worthit: false,
    exp_date: new Date('2013', '08', '01'),
    story: "fbhbfdbaslbdbashf safh acxbhvdfh halvfav fhdvaflahfhasvfljash mnxhcjvahvfhasvs dsadasg dsafgsa sdasdsa  " ,
    likes:0,
    dislikes:0
  } ,
    {
    name: 'Sushi at vancouver downtown',
    worthit: true,
    exp_date: new Date('2014', '03', '08'),
    story: "fbhbfdbaslbdbashf safh acxbhvdfh halvfav fhdvaflahfhasvfljash mnxhcjvahvfhasvs dsadasg dsafgsa sdasdsa " ,
    likes:0,
    dislikes:0
  },
  {
    name: 'Using C++ for ML',
    worthit: false,
    exp_date: new Date('2013', '08', '01'),
    story: "fbhbfdbaslbdbashf safh acxbhvdfh halvfav fhdvaflahfhasvfljash mnxhcjvahvfhasvs dsadasg dsafgsa sdasdsa " ,
    likes:0,
    dislikes:0
  },
  {
    name: 'Using C++ for ML',
    worthit: false,
    exp_date: new Date('2013', '08', '01'),
    story: "fbhbfdbaslbdbashf safh acxbhvdfh halvfav fhdvaflahfhasvfljash mnxhcjvahvfhasvs dsadasg dsafgsa sdasdsa " ,
    likes:0,
    dislikes:0
  }
],
    $scope.plusOne=function(index){
    $scope.products[index].likes += 1;
  };
  $scope.minusOne=function(index){
    $scope.products[index].dislikes += 1;
  }
}])
