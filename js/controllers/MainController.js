app.controller('MainController',['$scope',function($scope){
  $scope.title="Topics Board";
  $scope.promo="Share your Experience together",
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
  } ,
    {
    name: 'Sushi at vancouver downtown',
    worthit: true,
    tag: "food",
    exp_date: new Date('2014', '03', '08'),
    story: "fbhbfdbaslbdbashf safh acxbhvdfh halvfav fhdvaflahfhasvfljash mnxhcjvahvfhasvs dsadasg dsafgsa sdasdsa " ,
    likes:0,
    dislikes:0,
    logo: "public/logo/a13.png"
  },
  {
    name: 'Using C++ for ML',
    worthit: false,
    tag: "study",
    exp_date: new Date('2013', '08', '01'),
    story: "fbhbfdbaslbdbashf safh acxbhvdfh halvfav fhdvaflahfhasvfljash mnxhcjvahvfhasvs dsadasg dsafgsa sdasdsa " ,
    likes:0,
    dislikes:0,
    logo: "public/logo/a20.png"
  },
  {
    name: 'Using C++ for ML',
    exp_date: new Date('2013', '08', '01'),
    story: "fbhbfdbaslbdbashf safh acxbhvdfh halvfav fhdvaflahfhasvfljash mnxhcjvahvfhasvs dsadasg dsafgsa sdasdsa " ,
    tag: "study",
    likes:0,
    dislikes:0,
    logo: "public/logo/a16.png"
  }
]

}])
