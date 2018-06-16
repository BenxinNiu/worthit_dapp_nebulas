var app=angular.module("worthit_dapp",['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/')
  $stateProvider.state('landing', {
    url: '/',
    templateUrl : "views/landing.html"
    //controller : 'controller/mainController'
  })
  $stateProvider.state('newTopic',{
      url: '/newTopic',
      templateUrl : "views/newTopics.html",
    //controller : 'TopicsController'
  })
})
