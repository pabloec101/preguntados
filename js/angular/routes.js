preguntadosApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/index");
  
  $stateProvider
    .state('index', {
      url: "/index",
      templateUrl: "templates/categoryList.html"
    })
    .state('questionDetail', {
      url: "/questionDetail/:categoryId",
      templateUrl: "templates/questionDetail.html"
    });

});