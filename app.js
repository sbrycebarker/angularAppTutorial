angular.module('myApp', ['ui.router']).config(function($urlRouterProvider, $stateProvider){

// creat routes

  $urlRouterProvider.when('', '/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'main.html',
    controller: 'ctrl'
  })
  .state('view2', {
    url: '/view2',
    templateUrl: 'view2.html'
  })

})
