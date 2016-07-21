(function() {
	'use strict';

    var app = angular.module('app', ['ui.router', 'toastr']);

    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/loginpage");
      
      $stateProvider
             
          .state('loginpage', {
              url: "/loginpage",
              templateurl: "app/chirpPartials/state-loginpage.html",
             
          }); 

           .state('regpage', {
              url: "/regpage",
              templateurl: "app/chirpPartials/state-regpage.html",
             
          });               



	    .value('apiUrl', 'http://localhost:57900/api/')
})();
