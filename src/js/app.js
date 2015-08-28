'use strict';

angular.module('delacourApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        title:'Swiss Luxury Watches'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        title:'deLaCour History'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        title:'About deLaCour'
      })
      .when('/philosophy', {
        templateUrl: 'views/philosophy.html',
        title:'Philosophy deLaCour'
      })
      .when('/store-locator', {
        templateUrl: 'views/store-locator.html',
        controller: 'StoreLocatorCtrl',
        title:'Store Locator'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        title:'deLaCour Contact'
      })
      //---- PRESS -----//
      .when('/editorial', {
        templateUrl: 'views/editorial.html',
        controller: 'EditorialCtrl',
        title:'Editorial'
      })
      .when('/editorial/:year', {
        templateUrl: 'views/editorial.html',
        controller: 'EditorialCtrl',
        title:'Editorial'
      })
      .when('/editorial/:year/:country', {
        templateUrl: 'views/editorial.html', 
        controller: 'EditorialCtrl',
        title:'Editorial' 
      })
      .when('/editorial/:year/:country/:clip', {
        templateUrl: 'views/editorial.html', 
        controller: 'EditorialCtrl',
        title:'Editorial' 
      })
      .when('/press', {
        templateUrl: 'views/press.html',
        title:'Press Zone'
      })
      .when('/press/press-release-collection', {
        templateUrl: 'views/press/press-release-collection.html',
        controller: 'PressCtrl',
        title:'Press Release Collection'
      })
      .when('/press/press-release-news', {
        templateUrl: 'views/press/press-release-news.html',
        controller: 'PressCtrl',
        title:'Press Release News'
      })
      .when('/press/advertising-campaign', {
        templateUrl: 'views/press/campaign-advertising.html',
        controller: 'PressCtrl',
        title:'Campaign Advertising'
      })
      //---- COLLECTIONS -----//
      .when('/collection', {
        templateUrl: 'views/collection.html',
        controller: 'CollectionCtrl',
        title:'deLaCour Collection'
      })
      .when('/collection/bitourbillon', {
        templateUrl: 'views/collections/bitourbillon.html',
        title:'The Bitourbillon'
      })
      .when('/collection/birepetition', {
        templateUrl: 'views/collections/birepetition.html',
        title:'The Birepetition'
       })
      .when('/collection/triplezone', {
        templateUrl: 'views/collections/city-triplezone.html',
        title:'The Triplezone'
      })
      .when('/collection/monotourbillon', {
        templateUrl: 'views/collections/saqra-monotourbillon.html',
        title:'The Monotourbillon'
      })
      // Bichrono
      .when('/collection/bichrono', {
        templateUrl: 'views/collections/bichrono.html',
        title:'The Bichrono Collection'
      })
      .when('/collection/bichrono/bichrono-saga', {
        templateUrl: 'views/collections/bichrono-saga.html',
        controller: 'BichronoSagaCtrl',
        title:'The Bichrono Saga'
      })
      // City
      .when('/collection/city', {
        templateUrl: 'views/collections/city.html',
        controller:'CityCtrl',
        title:'The City Collection'
      })
      .when('/collection/city/customize-episode', {
        templateUrl: 'views/collections/city-episode.html',
        controller: 'CustomizeWatchCtrl',
        title:'The City Ego Episode'
      })
      .when('/collection/city/sun-and-love', {
        templateUrl: 'views/collections/city-sun-and-love.html',
        title:'The City Sun and Love'
      })
      .when('/collection/city/:modelo', {
        templateUrl: 'views/collections/city-ego.html',
        controller: 'CityCtrl',
        title:'The City Ego'
      })
      // Leap
      .when('/collection/leap', {
        templateUrl: 'views/collections/leap.html',
        title:'The Leap Collection'
      })
      //con collection
      .when('/collection/leap/passion', {
        templateUrl: 'views/collections/leap-passion.html',
        controller: 'CustomizeWatchCtrl',
        title:'The Leap Passion'
      })
      .when('/collection/leap/baguette', {
        templateUrl: 'views/collections/leap-baguette.html',
        controller: 'CustomizeWatchCtrl',
        title:'The Leap Baguette'
      })
      .when('/collection/leap/snow', {
        templateUrl: 'views/collections/leap-snow.html',
        controller: 'CustomizeWatchCtrl',
        title:'The Leap Snow'
      })
      // Saqra
      .when('/collection/saqra', {
        templateUrl: 'views/collections/saqra.html',
        title:'The Saqra Collection'
      })
      // Reflect
      .when('/collection/reflect', {
        templateUrl: 'views/collections/reflect.html',
        title:'The Reflect Collection'
      })
      // Promess
      .when('/collection/promess', {
        templateUrl: 'views/collections/promess.html',
        title:'The Promess Collection'
      })
      .when('/collection/promess/glamour', {
        templateUrl: 'views/collections/promess-glamour.html',
        controller: 'CustomizeWatchCtrl',
        title:'The Promess Glamour'
      })
      .when('/collection/promess/reef-saver', {
        templateUrl: 'views/collections/promess-reef-saver.html',
        controller: 'ReefSaverCtrl',
        title:'The Promess Reef Saver'
      })
      .when('/collection/promess/vitrail', {
        templateUrl: 'views/collections/promess-vitrail.html',
        title:'The Promess Vitrail'
      })
      // Specialties
      .when('/specialties', {
        templateUrl: 'views/specialties.html',
        controller: 'SpecialtiesCtrl',
        title:'deLaCour Specialties'
      })
      // deLaCour Collection 2015
      .when('/collection/catalogue', {
        templateUrl: 'views/catalogue.html',
        controller: 'WatchesCtrl',
        title:'deLaCour Collection'
      })
      // deLaCour Collection watch selected
      .when('/collection/catalogue/:collection', {
        templateUrl: 'views/catalogue.html',
        controller: 'WatchesCtrl',
        title:'deLaCour Collection'
      })
      // deLaCour Collection watch selected
      .when('/collection/catalogue/:collection/:ref', {
        templateUrl: 'views/watch-detail.html',
        controller: 'WatchesCtrl',
        title:'deLaCour Collection'
      })
      // error
      .otherwise({
        redirectTo: 'not-found',
        templateUrl: 'views/not-found.html',
        title:'Not found'
      });

      // use the HTML5 History API
      $locationProvider.html5Mode(true);

  }])
  .run(function($rootScope, $location, $route){

    // Facebook ID
    $rootScope.facebookAppId = '1416856141947757';

  	$rootScope.$on('$viewContentLoaded', function ($scope) {

      $(window).resize(function() {
        if($location.path()==='/'){
          if($(window).width()<1025){
            $('#menu .right').css('display','none');
          }else{
            $('#menu .right').css('display','block');
          }
        }else{
          $('#menu .right').css('display','block');
        }
      });

      // para que google analytics coja el root
      ga('send', 'pageview', $location.path());

      $(document).foundation('orbit', {
        animation: 'slide',
        next_on_click: false,
        pause_on_click: false,
        timer_speed: 5000,
        pause_on_hover: false,
        resume_on_mouseout: true,
        timer: true,
        slide_number: false
      });

      setTimeout(function(){
         $(window).trigger('resize');
         $(document).foundation();
      }, 500);

    });

    $rootScope.$on('$routeChangeSuccess', function(currentRoute, previousRoute){

      // changing the main style depending the section (.dlc-white, .dlc-black)
      var urlFirstStep = $location.url();
      urlFirstStep = urlFirstStep.split('/');

      if(urlFirstStep[2]==='catalogue'){
        $rootScope.dlcWhite = true;
        $rootScope.dlcBlack = false;
        $rootScope.logoWhite = false;
        $rootScope.logoBlack = true;
      }else{
        $rootScope.dlcWhite = false;
        $rootScope.dlcBlack = true;
        $rootScope.logoWhite = true;
        $rootScope.logoBlack = false;
      }

      //Change page title, based on Route information
      $rootScope.title = $route.current.title;
    });

  });