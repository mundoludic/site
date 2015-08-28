(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
'use strict';

angular.module('delacourApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.url = $location.absUrl();

    $scope.onPodiumLounge = function(){
      $window.ga('push', ['_trackEvent', 'banners', 'onPodiumLounge']);
    }

    // para visualizar el logo silver en la home
    $scope.isHome = function(){
      var home = true;
      if($location.url()!='/') home = false;
      return home;
    }

});

angular.module('delacourApp')
  .controller('HomeCtrl', function ($scope, Home) {

    // latest news wordpress
    Home.getLatestNews().then(function(data) {
      $scope.latestNews = data;
    });

});

angular.module('delacourApp')
  .controller('ContactCtrl', function ($scope, Contact, $location) {

    var master = {};

    // Countries
    Contact.getCountries().then(function(data) {
      $scope.countries = data;
    });

    // Type request
    Contact.getTypeRequest().then(function(data) {
      $scope.types = data;
    }); 

    // Find us
    Contact.getFindUs().then(function(data) {
      $scope.finds = data;
    });

    $scope.newsletter = true;

    // comportamiento
    $scope.onSend = function(valid){
      if(valid){
        Contact.setForm($scope).then(function(data) {
          console.log(data);
          if(data[0].Cod_error==0){
            $scope.msg = "Thank you for your time, we endeavour to respond to all queries as soon as possible.";
            $('#contact-modal-success').foundation('reveal', 'open');
          }else{
            $scope.msg = "We apologize for this inconvenience, but an error has been detected.\n Please, try again or send us a email to: webmaster@delacour.ch";
            $('#contact-modal-alert').foundation('reveal', 'open');
          }
        });
      }else{
        $scope.msg = 'Please, check the required fields.';
        $('#contact-modal-alert').foundation('reveal', 'open');
      }
    }

    // comportamiento si cierran la ventana modal
    $scope.onCloseModal = function(){
      window.location.reload();
    }

});

/****** GOOGLE MAPS ********/

angular.module('delacourApp')
  .controller('StoreLocatorCtrl', function ($scope) {
  	$.getScript("js/store-locator/store-locator.js")
	  .done(function( script, textStatus ) {
	    
	  })
	  .fail(function( jqxhr, settings, exception ) {
	    console.log( "error:"+exception );
	});
});

function showVideo(){
	$(".image-video").css("display","none");
	$("#video").css("display","block");
}
'use strict';

angular.module('delacourApp')
  .controller('CollectionCtrl', function ($scope) {
    console.log("dentro collection");
});

angular.module('delacourApp')
  .controller('WatchesCtrl', function ($scope, Watches, $location, $routeParams) {

    // get scope family o all
    $scope.family = $routeParams.collection;
    if($scope.family==undefined) $scope.family='all';

    var ref = $location.url().split("/");
    ref = ref[ref.length-1];

    // watches
    Watches.getWatches($scope.family).then(function(data) {
      $scope.watches = data;

      // get the families of the selection
      $scope.families = [];
      angular.forEach(data, function(v1){
        var inside = false;
        angular.forEach($scope.families,function(v2){
          if(v1.familyName==v2){
            inside = true;
          }
        });
        if(!inside && v1.familyName!='specialtimepieces') $scope.families.push(v1.familyName);

      });

    });

    $scope.show_power_reserve = true;

    // get watch detail
    Watches.getWatchDetail(ref).then(function(data) {

      $scope.watchDetail = data;

      // excepciones en la correa (no toda la colección lleva el mismo tipo)
      // if($scope.watchDetail.ref=='WATI0098-1430'){
      //   $scope.watchDetail.strap = 'Rubber';
      // }

      if($scope.watchDetail.stones==''){
        $scope.watchDetail.stonesShow=0;
      }else{
        $scope.watchDetail.stonesShow=1;
      }

      Watches.getWatchesCollection(data.collection).then(function(data) {

        $scope.watchesCollection = data;

      });

    });


});

angular.module('delacourApp')
  .controller('CustomizeWatchCtrl', function ($scope) {
    $.getScript("js/collections/customize-watch.js")
    .done(function( script, textStatus ) {
      console.log("dentro customize");
    })
    .fail(function( jqxhr, settings, exception ) {
      console.log( "error:"+exception );
  });
});

// specialties
angular.module('delacourApp')
  .controller('SpecialtiesCtrl', function ($scope) {
    $.getScript("js/collections/specialties.js")
    .done(function( script, textStatus ) {
      console.log("dentro specialties");
    })
    .fail(function( jqxhr, settings, exception ) {
      console.log( "error:"+exception );
  });
});

angular.module('delacourApp')
  .controller('ReefSaverCtrl', function ($scope) {
    $.getScript("js/collections/reef-saver-deep.js")
    .done(function( script, textStatus ) {
      console.log("dentro reef");
    })
    .fail(function( jqxhr, settings, exception ) {
      console.log( "errore:"+exception );
  });
});

 angular.module('delacourApp')
  .controller('BichronoSagaCtrl', function ($scope) {
    $.getScript( "js/timelinejs/storyjs-embed.js" )
    .done(function( script, textStatus ) {
      $(function() {
         createStoryJS({
             type:       'timeline',
             width:      '100%',
             height:     '650',
             source:     'json/bichrono/bichrono-timeline.json',
             embed_id:   'bichrono-saga',
             maptype:    'watercolor', 
             start_zoom_adjust:  '1', 
             css:        'css/timelinejs/timeline.css',     //OPTIONAL PATH TO CSS
             js:         'js/timelinejs/timeline-min.js'
         });
      });
    })
    .fail(function( jqxhr, settings, exception ) {
      console.log( "error" );
  });
});

angular.module('delacourApp')
  .directive('caractere', function ($filter, Collections) {

    return{
      restrict: 'E',
      templateUrl: 'views/directives/city-ego-caractere.html',
      controller: 'CityCtrl',
      link: function(scope){
        // City Caractere
      Collections.getCityCaractereSlider().then(function(data) {
        // filtramos
        scope.sliderCityCaractere = $filter('sliderContent')(data);
      });
      $(document).foundation();
      }
    }

  });

angular.module('delacourApp')
  .directive('episode', function ($filter, Collections) {

    return{
      restrict: 'E',
      templateUrl: 'views/directives/city-ego-episode.html',
      controller: 'CityCtrl',
      link: function(scope){
        // City Caractere
      Collections.getCityEpisodeSlider().then(function(data) {

        // filtramos
        scope.sliderCityEpisode = $filter('sliderContent')(data);
      });
      $(document).foundation();
      }
    }

  });

angular.module('delacourApp')
  .directive('chrono45', function () {

    return{
      restrict: 'E',
      templateUrl: 'views/directives/city-ego-chrono-45.html',
      controller: 'CityCtrl',
      link: function(scope){
        // City Chrono 45
      Collections.getCityEpisodeSlider().then(function(data) {
        // filtramos
        scope.sliderCityEpisode = $filter('sliderContent')(data);
      });
      $(document).foundation();
      }
    }

  });

angular.module('delacourApp')
  .controller('CityCtrl', function ($scope, $location, $routeParams, $filter, Collections) {

    $scope.modelo = $routeParams.modelo;

    $scope.isActive = function(route) {
        return route === $location.path();
    }

    // City
    Collections.getCitySlider().then(function(data) {
      // filtramos
      $scope.sliderCity = $filter('sliderContent')(data);
    });

});
'use strict';

angular.module('delacourApp')
  .controller('PressCtrl', function ($scope, Press) {
    
    // Press Release
    Press.getPressReleases().then(function(data) {
      $scope.pressReleases = data;
    });

    // Press Release News
    Press.getPressReleasesNews().then(function(data) {
      $scope.pressReleasesNews = data;
    });

    // Ad Visuals
    Press.getAdVisuals().then(function(data) {
      $scope.adVisuals = data;
    });

});

angular.module('delacourApp')
  .controller('EditorialCtrl', function ($scope, $filter, $location, $routeParams, Press) {

    $('.alert-box').hide();
    $('#modal-clippings').css('display','none');

    $scope.year = $routeParams.year;
    $scope.country = $routeParams.country;
    $scope.clip = $routeParams.clip;

    console.log("hay Clip:"+$scope.clip);

    // Editorial
    Press.getEditorial().then(function(data) {
      $scope.editorialFull = data;
      $scope.editorial = $scope.editorialFull;
      console.log($scope.editorial);
      // filtramos
      $scope.editorial = $filter('editorial')($scope.editorialFull, $routeParams.year, $routeParams.country);
    });

    // Countries
    Press.getCountries().then(function(data) {
      $scope.countries = data;
      $scope.selectedCountry = $routeParams.country;
    });

    // Years
    Press.getYears().then(function(data) {
      $scope.years = data;
    });

    $scope.onChangeCountry = function(country){
      console.log("country:"+country);
      $location.path('/editorial/'+$scope.year+'/'+country);
    }

    $scope.isActive = function(year) {
      if (year.data == $routeParams.year) {
        return true;
      }
      return false;
    };

    $scope.onClip = function(id){
      $scope.clip = Number(id);

      $scope.clipImage = $scope.editorial[id].image;
      $scope.clipYear = $scope.editorial[id].year;
      $scope.clipCaption = $scope.editorial[id].caption;
      $scope.clipLink = $scope.editorial[id].link;
      $('#modal-clippings').css('display','block');
      // $location.path('/editorial/'+$routeParams.year+'/'+$routeParams.country+'/'+$routeParams.clip);
    };

    $scope.onX = function(){
      $('#modal-clippings').css('display','none');
    };

    $scope.onPrev = function(id){
      var prev = id-1;
      if(prev>=0){
        $scope.onClip(prev);
      }
    };

    $scope.onNext = function(id){
      var next = id+1;
      $scope.onClip(next);
    };

});

angular.module('delacourApp')
  .directive('clearing', function() {
    return {
    restrict: 'A',
        templateUrl: 'views/directives/editorial-clearing.html',
    }
});

'use strict';

angular.module('delacourApp')
  .factory('Contact', function($http, $q) {

  	var getCountries = function() {
        var deferred = $q.defer();

        $http.get('json/contact/countries.json').success(function(data){
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    var getTypeRequest = function() {
        var deferred = $q.defer();

        $http.get('json/contact/typeRequest.json').success(function(data){
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    var getFindUs = function() {
        var deferred = $q.defer();

        $http.get('json/contact/findUs.json').success(function(data){
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    var setForm = function($scope) {
        var deferred = $q.defer();

        $http.post('php/contact.php', 
            {
            'firstName': $scope.user.firstName, 
            'lastName': $scope.user.lastName, 
            'email': $scope.user.email, 
            'telephone': $scope.user.telephone, 
            'country': $scope.user.country, 
            'city': $scope.user.city, 
            'postalCode': $scope.user.postalCode, 
            'typeRequest': $scope.user.typeRequest, 
            'findUs': $scope.user.findUs, 
            'comments': $scope.user.comments, 
            'newsletter': $scope.newsletter
        }).success(function(data, status){
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    return{
    	getCountries: getCountries,
        getTypeRequest: getTypeRequest,
        getFindUs: getFindUs,
        setForm: setForm
    };

});
'use strict';

angular.module('delacourApp')
  .factory('Press', function($http, $q) {

  	var getPressReleases = function() {
        var deferred = $q.defer();

        $http.get('json/press/press-release-collection.json').success(function(data){
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    var getPressReleasesNews = function() {
        var deferred = $q.defer();

        $http.get('json/press/press-release-news.json').success(function(data){
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    var getAdVisuals = function() {
        var deferred = $q.defer();

        $http.get('json/press/campaign-advertising.json').success(function(data){
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    var getEditorial = function() {
        var deferred = $q.defer();

        $http.get('json/press/editorial.json').success(function(data){
            angular.forEach(data, function(value,key){
                var year = data[key].date.split('-');
                year = year[0];
                data[key].year = year;
            });
            deferred.resolve(data);
        });

        return deferred.promise;
    }

    var getCountries = function() {
        var deferred = $q.defer();

        $http.get('json/press/editorialCountries.json').success(function(data){
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    var getYears = function() {
        var deferred = $q.defer();

        $http.get('json/press/editorialYears.json').success(function(data){
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    return{
    	getPressReleases: getPressReleases,
    	getPressReleasesNews: getPressReleasesNews,
    	getAdVisuals: getAdVisuals,
        getEditorial: getEditorial,
        getCountries: getCountries,
        getYears: getYears
    }

});
'use strict';

angular.module('delacourApp')
  .factory('Home', function($http, $q) {

    var meses = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];

   // hacemos un get de las ultimas noticias del blog - plugin 
    var getLatestNews = function() {
        var deferred = $q.defer();

        $http.get('http://www.delacour.ch/news/?json=get_posts&count=5').success(function(data){

            var salida = [];

            angular.forEach(data.posts, function(value, key) {

                var fecha = value.date;
                fecha = fecha.split("-");
                value.mes = meses[fecha[1]-1];
                var dia = fecha[2].split(" ");
                value.dia = dia[0];

                this.push(value);

            }, salida);

            deferred.resolve(salida);
        });

        return deferred.promise;
    };

    return{
    	getLatestNews: getLatestNews
    }

});
'use strict';

angular.module('delacourApp')
  .factory('Collections', function($http, $q) {

  	var getCitySlider = function() {
        var deferred = $q.defer();

        $http.get('json/collections/city/city.json').success(function(data){
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    var getCityCaractereSlider = function() {
        var deferred = $q.defer();

        $http.get('json/collections/city/city-ego-caractere.json').success(function(data){
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    var getCityEpisodeSlider = function() {
        var deferred = $q.defer();

        $http.get('json/collections/city/city-ego-episode.json').success(function(data){
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    return{
    	getCitySlider: getCitySlider,
        getCityCaractereSlider: getCityCaractereSlider,
        getCityEpisodeSlider: getCityEpisodeSlider
    }

});
'use strict';

angular.module('delacourApp')
  .factory('Watches', function($http, $q) {

  	var getWatches = function() {

        var deferred = $q.defer();

        $http.post('php/get-watches.php', {}).success(function(data){

            // sin errores
            if(!data[0].Cod_error){
                angular.forEach(data, function(value, key){
                    data[key].collectionName = angular.uppercase(data[key].collectionName);
                });
            // control de errores
            }else{
                if(data[0].Cod_error==1){
                    console.log(data[0].Des_error);
                }else{
                    console.log(data[0].Des_error);   
                }
            }

            deferred.resolve(data);
        });

        return deferred.promise;
    };

    var getWatchesCollection = function(collection) {

        var deferred = $q.defer();

        $http.post('php/get-watches-collection.php', {'collection':collection}).success(function(data){
            // sin errores
            if(!data[0].Cod_error){
                
            // control de errores
            }else{
                if(data[0].Cod_error==1){
                    console.log(data[0].Des_error);
                }else{
                    console.log(data[0].Des_error);   
                }
            }

            deferred.resolve(data);
        });

        return deferred.promise;
    };

    var getWatchDetail = function(ref) {

        var deferred = $q.defer();

        var salida = {};

        $http.post('php/get-watch-detail.php', {'ref':ref}).success(function(data){

            angular.forEach(data, function(value, key){

                salida.collection = data[key].collection;
                salida.ref = data[key].ref;
                salida.description = data[key].description;
                salida.price = data[key].price;
                salida.limitedEdition = data[key].limitedEdition;
                salida.calibre = data[key].calibre;
                salida.instructionManual = data[key].instructionManual;
                salida.dimensions = data[key].dimensions;
                salida.type_movement = data[key].type_movement;
                salida.power_reserve = data[key].power_reserve; if(salida.power_reserve==0) salida.power_reserve = 0;
                salida.functions = data[key].functions;
                salida.glass = data[key].glass;
                salida.back = data[key].back; if(salida.back=='NULL') salida.back = 0;
                salida.water_resistant = data[key].water_resistant;
                salida.strap = data[key].strap;
                salida.hands = data[key].hands;
                salida.limited_edition = data[key].limited_edition;
                salida.crown = data[key].crown;
                // ponemos hg-show a 0 en los que tengan valor 0
                salida.white_dia_case = data[key].white_dia_case; if(salida.white_dia_case=='0') salida.white_dia_case = 0;
                salida.black_dia_case = data[key].black_dia_case; if(salida.black_dia_case=='0') salida.black_dia_case = 0;
                salida.white_dia_dial = data[key].white_dia_dial; if(salida.white_dia_dial=='0') salida.white_dia_dial = 0;
                salida.black_dia_dial = data[key].black_dia_dial; if(salida.black_dia_dial=='0') salida.black_dia_dial = 0;
                salida.color_stones_dial = data[key].color_stones_dial; if(salida.color_stones_dial=='0') salida.color_stones_dial = 0;
                salida.dial_description = data[key].dial_description;
                salida.new = data[key].new;
            });

            deferred.resolve(salida);
        });

        return deferred.promise;
    };

    return{
    	getWatches: getWatches,
        getWatchesCollection: getWatchesCollection,
        getWatchDetail: getWatchDetail
    }

});
'use strict';

angular.module('delacourApp')
  .filter('editorial', function () {
    return function(editorial, year, country){

      console.log("editorial:"+editorial);

      var salida = [];

      	angular.forEach(editorial, function(value, key){

          var status = false;

          // si es international y all
    			if(country=='all' && year=='all'){
        		status = true;
    			}else if (country=='all' && year==value.year){
            status = true;
          }else if (country==value.country && year=='all'){
            status = true;
          }else if(country==value.country && year==value.year){
            status = true;
          }

          if(status){
            salida.push(value);
          }

      	});

        // si no hay resultados mostramos el alert-panel
        if (salida.length==0){
          $('.alert-box').show();
        }

      return salida;
    }
});
'use strict';

//*** filter latest news no data de wordpress - cuando hacia un get de latest-news.json ****//
angular.module('delacourApp')
  .filter('latestNews', function () {
    return function(news){

	   	var salida = [];

	   	angular.forEach(news, function(value, key){
	   		if(value.active==1){
	   			salida.push(value);
	   		}
	   	});

	    return salida;	
	}
});

angular.module('delacourApp')
  .filter('sliderContent', function () {
    return function(content){

	   	var salida = [];

	   	angular.forEach(content, function(value, key){
	   		if(value.active==1){
	   			salida.push(value);
	   		}
	   	});

	    return salida;
	}
});

angular.module('delacourApp')
  .filter('selectWatches', function () {
    return function(items, family){

    	var salida = [];

    	if(family=='all' || family=='undefined'){
    		salida = items;
    	}else{
    		for (var i = items.length - 1; i >= 0; i--) {
    			if(items[i].familyName == family){
    				salida.push(items[i]);
    			}
    		};
    	}

	   	return salida;
	}
});
'use strict';

angular.module('delacourApp')
  .directive('socialBtns', function () {
    return{
    	restrict: 'A',
    	templateUrl: 'views/directives/social-btns.html',
    	link: function(scope, element, attrs){
    		  element.bind('mouseover', function() {
        		$('.social-background').css('opacity',0.7);
            $('.social-btns').css('opacity',1);
      		});
      		element.bind('mouseout', function() {
        		$('.social-background').css('opacity',0);
            $('.social-btns').css('opacity',0);
      		});
    	},
      scope: {
        image: '@',
        title: '@',
        description: '@',
        tag: '@',
        url: '@'
      } 
    }
});

angular.module('delacourApp')
  .directive('facebookOpenGraph', function($rootScope) {

    console.log("title:"+$rootScope.title);

    return {
      restrict : 'E',
      // scope: {
      //   url: $rootScope.title  
      // },
      templateUrl: 'views/directives/facebook-open-graph.html',
    }
});

'use strict';

angular.module('delacourApp')
  .directive('socialshare', ['$window', '$location', function manageDirective ($window, $location) {

    return {
      'restrict': 'A',
      'link': function linkingFunction ($scope, element, attr) {

        var key,
          attributeName,
          properties = {},
          propDefaults = {
          'url': '',
          'provider': '',
          'text': '',
          'media': '',
          'hashtags': '',
          'via': '',
          'popupHeight': 500,
          'popupWidth': 500
        };

        // Observe the values in each of the properties so that if they're updated elsewhere,
        // they are updated in this directive.
        for (key in propDefaults) {
          if (propDefaults.hasOwnProperty(key)) {
            attributeName = 'socialshare' + key.substring(0, 1).toUpperCase() + key.substring(1);
            if (attr[attributeName]) {
              (function (keyName) {
                attr.$observe(attributeName, function (value) {
                  properties[keyName] = value;
                });
              }(key));
            } else {
              // Use the default
              properties[key] = propDefaults[key];
            }
          }
        }

        properties.eventTrigger = attr.socialshareTrigger || 'click';

        $scope.facebookShare = function manageFacebookShare (data) {

          $window.open(
            '//www.facebook.com/sharer/sharer.php?u=' + encodeURI(data.url)
            ,'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.twitterShare = function manageTwitterShare (data) {
          var urlString = '//www.twitter.com/intent/tweet?';

          if (data.text) {
            urlString += 'text=' + encodeURIComponent(data.text);
          }

          if (data.via) {
            urlString += '&via=' + encodeURI(data.via);
          }

          if (data.hashtags) {
            urlString += '&hashtags=' + encodeURI(data.hashtags);
          }

          // Default to the current page if a URL isn't specified
          urlString += '&url=' + encodeURI(data.url || $location.absUrl());

          $window.open(
            urlString,
            'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight
          );

        };

        $scope.googlePlusShare = function manageGooglePlusShare (data) {

          $window.open(
            '//plus.google.com/share?url=' + encodeURI(data.url)
            ,'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.redditShare = function manageRedditShare (data) {

          $window.open(
            '//www.reddit.com/submit?url=' + encodeURI(data.url) + '&title=' + encodeURI(data.text)
            ,'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.stumbleuponShare = function manageStumbleuponShare (data) {

          $window.open(
            '//www.stumbleupon.com/submit?url=' + encodeURI(data.url) + '&title=' + encodeURI(data.text)
            ,'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.linkedinShare = function manageLinkedinShare (data) {

          $window.open(
            '//www.linkedin.com/shareArticle?mini=true&url=' + encodeURI(data.url) + '&title=' + encodeURI(data.text)
            ,'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.pinterestShare = function managePinterestShare (data) {

          $window.open(
            '//www.pinterest.com/pin/create/button/?url=' + encodeURI(data.url) + '&media=' + encodeURI(data.media) + '&description=' + encodeURI(data.text)
            ,'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.diggShare = function manageDiggShare (data) {

          $window.open(
            '//www.digg.com/submit?url=' + encodeURI(data.url) + '&title=' + encodeURI(data.text)
            ,'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.tumblrShare = function manageTumblrShare (data) {
          //tumblr doesnt likes http:// or https:// actually its a mistery
          $window.open(
            '//www.tumblr.com/share/link?url=' + encodeURI(data.url.replace('http://', '').replace('https://')) + '&description=' + encodeURI(data.text)
            ,'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.vkShare = function manageVkShare (data) {

         $window.open(
            '//www.vk.com/share.php?url=' + encodeURI(data.url)
            ,'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.deliciousShare = function manageDeliciousShare (data) {

          $window.open(
            '//www.delicious.com/save?v=5&noui&jump=close&url=' + encodeURI(data.url) + '&title=' + encodeURI(data.text)
            ,'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        element.bind(properties.eventTrigger, function onEventTriggered() {

          switch (properties.provider) {
            case 'facebook':

              $scope.facebookShare(properties);
              break;

            case 'google+':

              $scope.googlePlusShare(properties);
              break;

            case 'twitter':

              $scope.twitterShare(properties);
              break;

            case 'stumbleupon':

              $scope.stumbleuponShare(properties);
              break;

            case 'reddit':

              $scope.redditShare(properties);
              break;

            case 'pinterest':

              $scope.pinterestShare(properties);
              break;

            case 'linkedin':

              $scope.linkedinShare(properties);
              break;

            case 'digg':

              $scope.diggShare(properties);
              break;

            case 'tumblr':

              $scope.tumblrShare(properties);
              break;

            case 'delicious':

              $scope.deliciousShare(properties);
              break;

            case 'vk':

              $scope.vkShare(properties);
              break;

            default: return;
          }
        });
      }
    };
}]);


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2lwL3NpdGVzL2xhYi9mcm9udGVuZC13b3JrZmxvdy9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFyaW9pcC9zaXRlcy9sYWIvZnJvbnRlbmQtd29ya2Zsb3cvc3JjL2pzL2Zha2VfNWE5NzM1NTQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnLCBbXG4gICduZ0Nvb2tpZXMnLFxuICAnbmdSZXNvdXJjZScsXG4gICduZ1Nhbml0aXplJyxcbiAgJ25nUm91dGUnXG5dKVxuICAuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCAnJGxvY2F0aW9uUHJvdmlkZXInLCBmdW5jdGlvbigkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcblxuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignLycsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9ob21lLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnSG9tZUN0cmwnLFxuICAgICAgICB0aXRsZTonU3dpc3MgTHV4dXJ5IFdhdGNoZXMnXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9oaXN0b3J5Jywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2hpc3RvcnkuaHRtbCcsXG4gICAgICAgIHRpdGxlOidkZUxhQ291ciBIaXN0b3J5J1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvYWJvdXQnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvYWJvdXQuaHRtbCcsXG4gICAgICAgIHRpdGxlOidBYm91dCBkZUxhQ291cidcbiAgICAgIH0pXG4gICAgICAud2hlbignL3BoaWxvc29waHknLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGhpbG9zb3BoeS5odG1sJyxcbiAgICAgICAgdGl0bGU6J1BoaWxvc29waHkgZGVMYUNvdXInXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9zdG9yZS1sb2NhdG9yJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3N0b3JlLWxvY2F0b3IuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdTdG9yZUxvY2F0b3JDdHJsJyxcbiAgICAgICAgdGl0bGU6J1N0b3JlIExvY2F0b3InXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9jb250YWN0Jywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbnRhY3QuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdDb250YWN0Q3RybCcsXG4gICAgICAgIHRpdGxlOidkZUxhQ291ciBDb250YWN0J1xuICAgICAgfSlcbiAgICAgIC8vLS0tLSBQUkVTUyAtLS0tLS8vXG4gICAgICAud2hlbignL2VkaXRvcmlhbCcsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9lZGl0b3JpYWwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdFZGl0b3JpYWxDdHJsJyxcbiAgICAgICAgdGl0bGU6J0VkaXRvcmlhbCdcbiAgICAgIH0pXG4gICAgICAud2hlbignL2VkaXRvcmlhbC86eWVhcicsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9lZGl0b3JpYWwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdFZGl0b3JpYWxDdHJsJyxcbiAgICAgICAgdGl0bGU6J0VkaXRvcmlhbCdcbiAgICAgIH0pXG4gICAgICAud2hlbignL2VkaXRvcmlhbC86eWVhci86Y291bnRyeScsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9lZGl0b3JpYWwuaHRtbCcsIFxuICAgICAgICBjb250cm9sbGVyOiAnRWRpdG9yaWFsQ3RybCcsXG4gICAgICAgIHRpdGxlOidFZGl0b3JpYWwnIFxuICAgICAgfSlcbiAgICAgIC53aGVuKCcvZWRpdG9yaWFsLzp5ZWFyLzpjb3VudHJ5LzpjbGlwJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2VkaXRvcmlhbC5odG1sJywgXG4gICAgICAgIGNvbnRyb2xsZXI6ICdFZGl0b3JpYWxDdHJsJyxcbiAgICAgICAgdGl0bGU6J0VkaXRvcmlhbCcgXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9wcmVzcycsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wcmVzcy5odG1sJyxcbiAgICAgICAgdGl0bGU6J1ByZXNzIFpvbmUnXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9wcmVzcy9wcmVzcy1yZWxlYXNlLWNvbGxlY3Rpb24nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcHJlc3MvcHJlc3MtcmVsZWFzZS1jb2xsZWN0aW9uLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUHJlc3NDdHJsJyxcbiAgICAgICAgdGl0bGU6J1ByZXNzIFJlbGVhc2UgQ29sbGVjdGlvbidcbiAgICAgIH0pXG4gICAgICAud2hlbignL3ByZXNzL3ByZXNzLXJlbGVhc2UtbmV3cycsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wcmVzcy9wcmVzcy1yZWxlYXNlLW5ld3MuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdQcmVzc0N0cmwnLFxuICAgICAgICB0aXRsZTonUHJlc3MgUmVsZWFzZSBOZXdzJ1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvcHJlc3MvYWR2ZXJ0aXNpbmctY2FtcGFpZ24nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcHJlc3MvY2FtcGFpZ24tYWR2ZXJ0aXNpbmcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdQcmVzc0N0cmwnLFxuICAgICAgICB0aXRsZTonQ2FtcGFpZ24gQWR2ZXJ0aXNpbmcnXG4gICAgICB9KVxuICAgICAgLy8tLS0tIENPTExFQ1RJT05TIC0tLS0tLy9cbiAgICAgIC53aGVuKCcvY29sbGVjdGlvbicsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb2xsZWN0aW9uLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQ29sbGVjdGlvbkN0cmwnLFxuICAgICAgICB0aXRsZTonZGVMYUNvdXIgQ29sbGVjdGlvbidcbiAgICAgIH0pXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vYml0b3VyYmlsbG9uJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbGxlY3Rpb25zL2JpdG91cmJpbGxvbi5odG1sJyxcbiAgICAgICAgdGl0bGU6J1RoZSBCaXRvdXJiaWxsb24nXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9jb2xsZWN0aW9uL2JpcmVwZXRpdGlvbicsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb2xsZWN0aW9ucy9iaXJlcGV0aXRpb24uaHRtbCcsXG4gICAgICAgIHRpdGxlOidUaGUgQmlyZXBldGl0aW9uJ1xuICAgICAgIH0pXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vdHJpcGxlem9uZScsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb2xsZWN0aW9ucy9jaXR5LXRyaXBsZXpvbmUuaHRtbCcsXG4gICAgICAgIHRpdGxlOidUaGUgVHJpcGxlem9uZSdcbiAgICAgIH0pXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vbW9ub3RvdXJiaWxsb24nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29sbGVjdGlvbnMvc2FxcmEtbW9ub3RvdXJiaWxsb24uaHRtbCcsXG4gICAgICAgIHRpdGxlOidUaGUgTW9ub3RvdXJiaWxsb24nXG4gICAgICB9KVxuICAgICAgLy8gQmljaHJvbm9cbiAgICAgIC53aGVuKCcvY29sbGVjdGlvbi9iaWNocm9ubycsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb2xsZWN0aW9ucy9iaWNocm9uby5odG1sJyxcbiAgICAgICAgdGl0bGU6J1RoZSBCaWNocm9ubyBDb2xsZWN0aW9uJ1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvY29sbGVjdGlvbi9iaWNocm9uby9iaWNocm9uby1zYWdhJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbGxlY3Rpb25zL2JpY2hyb25vLXNhZ2EuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdCaWNocm9ub1NhZ2FDdHJsJyxcbiAgICAgICAgdGl0bGU6J1RoZSBCaWNocm9ubyBTYWdhJ1xuICAgICAgfSlcbiAgICAgIC8vIENpdHlcbiAgICAgIC53aGVuKCcvY29sbGVjdGlvbi9jaXR5Jywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbGxlY3Rpb25zL2NpdHkuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6J0NpdHlDdHJsJyxcbiAgICAgICAgdGl0bGU6J1RoZSBDaXR5IENvbGxlY3Rpb24nXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9jb2xsZWN0aW9uL2NpdHkvY3VzdG9taXplLWVwaXNvZGUnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29sbGVjdGlvbnMvY2l0eS1lcGlzb2RlLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQ3VzdG9taXplV2F0Y2hDdHJsJyxcbiAgICAgICAgdGl0bGU6J1RoZSBDaXR5IEVnbyBFcGlzb2RlJ1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvY29sbGVjdGlvbi9jaXR5L3N1bi1hbmQtbG92ZScsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb2xsZWN0aW9ucy9jaXR5LXN1bi1hbmQtbG92ZS5odG1sJyxcbiAgICAgICAgdGl0bGU6J1RoZSBDaXR5IFN1biBhbmQgTG92ZSdcbiAgICAgIH0pXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vY2l0eS86bW9kZWxvJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbGxlY3Rpb25zL2NpdHktZWdvLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQ2l0eUN0cmwnLFxuICAgICAgICB0aXRsZTonVGhlIENpdHkgRWdvJ1xuICAgICAgfSlcbiAgICAgIC8vIExlYXBcbiAgICAgIC53aGVuKCcvY29sbGVjdGlvbi9sZWFwJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbGxlY3Rpb25zL2xlYXAuaHRtbCcsXG4gICAgICAgIHRpdGxlOidUaGUgTGVhcCBDb2xsZWN0aW9uJ1xuICAgICAgfSlcbiAgICAgIC8vY29uIGNvbGxlY3Rpb25cbiAgICAgIC53aGVuKCcvY29sbGVjdGlvbi9sZWFwL3Bhc3Npb24nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29sbGVjdGlvbnMvbGVhcC1wYXNzaW9uLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQ3VzdG9taXplV2F0Y2hDdHJsJyxcbiAgICAgICAgdGl0bGU6J1RoZSBMZWFwIFBhc3Npb24nXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9jb2xsZWN0aW9uL2xlYXAvYmFndWV0dGUnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29sbGVjdGlvbnMvbGVhcC1iYWd1ZXR0ZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0N1c3RvbWl6ZVdhdGNoQ3RybCcsXG4gICAgICAgIHRpdGxlOidUaGUgTGVhcCBCYWd1ZXR0ZSdcbiAgICAgIH0pXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vbGVhcC9zbm93Jywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbGxlY3Rpb25zL2xlYXAtc25vdy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0N1c3RvbWl6ZVdhdGNoQ3RybCcsXG4gICAgICAgIHRpdGxlOidUaGUgTGVhcCBTbm93J1xuICAgICAgfSlcbiAgICAgIC8vIFNhcXJhXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vc2FxcmEnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29sbGVjdGlvbnMvc2FxcmEuaHRtbCcsXG4gICAgICAgIHRpdGxlOidUaGUgU2FxcmEgQ29sbGVjdGlvbidcbiAgICAgIH0pXG4gICAgICAvLyBSZWZsZWN0XG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vcmVmbGVjdCcsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb2xsZWN0aW9ucy9yZWZsZWN0Lmh0bWwnLFxuICAgICAgICB0aXRsZTonVGhlIFJlZmxlY3QgQ29sbGVjdGlvbidcbiAgICAgIH0pXG4gICAgICAvLyBQcm9tZXNzXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vcHJvbWVzcycsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb2xsZWN0aW9ucy9wcm9tZXNzLmh0bWwnLFxuICAgICAgICB0aXRsZTonVGhlIFByb21lc3MgQ29sbGVjdGlvbidcbiAgICAgIH0pXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vcHJvbWVzcy9nbGFtb3VyJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbGxlY3Rpb25zL3Byb21lc3MtZ2xhbW91ci5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0N1c3RvbWl6ZVdhdGNoQ3RybCcsXG4gICAgICAgIHRpdGxlOidUaGUgUHJvbWVzcyBHbGFtb3VyJ1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvY29sbGVjdGlvbi9wcm9tZXNzL3JlZWYtc2F2ZXInLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29sbGVjdGlvbnMvcHJvbWVzcy1yZWVmLXNhdmVyLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVlZlNhdmVyQ3RybCcsXG4gICAgICAgIHRpdGxlOidUaGUgUHJvbWVzcyBSZWVmIFNhdmVyJ1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvY29sbGVjdGlvbi9wcm9tZXNzL3ZpdHJhaWwnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29sbGVjdGlvbnMvcHJvbWVzcy12aXRyYWlsLmh0bWwnLFxuICAgICAgICB0aXRsZTonVGhlIFByb21lc3MgVml0cmFpbCdcbiAgICAgIH0pXG4gICAgICAvLyBTcGVjaWFsdGllc1xuICAgICAgLndoZW4oJy9zcGVjaWFsdGllcycsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9zcGVjaWFsdGllcy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1NwZWNpYWx0aWVzQ3RybCcsXG4gICAgICAgIHRpdGxlOidkZUxhQ291ciBTcGVjaWFsdGllcydcbiAgICAgIH0pXG4gICAgICAvLyBkZUxhQ291ciBDb2xsZWN0aW9uIDIwMTVcbiAgICAgIC53aGVuKCcvY29sbGVjdGlvbi9jYXRhbG9ndWUnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY2F0YWxvZ3VlLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnV2F0Y2hlc0N0cmwnLFxuICAgICAgICB0aXRsZTonZGVMYUNvdXIgQ29sbGVjdGlvbidcbiAgICAgIH0pXG4gICAgICAvLyBkZUxhQ291ciBDb2xsZWN0aW9uIHdhdGNoIHNlbGVjdGVkXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vY2F0YWxvZ3VlLzpjb2xsZWN0aW9uJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NhdGFsb2d1ZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1dhdGNoZXNDdHJsJyxcbiAgICAgICAgdGl0bGU6J2RlTGFDb3VyIENvbGxlY3Rpb24nXG4gICAgICB9KVxuICAgICAgLy8gZGVMYUNvdXIgQ29sbGVjdGlvbiB3YXRjaCBzZWxlY3RlZFxuICAgICAgLndoZW4oJy9jb2xsZWN0aW9uL2NhdGFsb2d1ZS86Y29sbGVjdGlvbi86cmVmJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3dhdGNoLWRldGFpbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1dhdGNoZXNDdHJsJyxcbiAgICAgICAgdGl0bGU6J2RlTGFDb3VyIENvbGxlY3Rpb24nXG4gICAgICB9KVxuICAgICAgLy8gZXJyb3JcbiAgICAgIC5vdGhlcndpc2Uoe1xuICAgICAgICByZWRpcmVjdFRvOiAnbm90LWZvdW5kJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9ub3QtZm91bmQuaHRtbCcsXG4gICAgICAgIHRpdGxlOidOb3QgZm91bmQnXG4gICAgICB9KTtcblxuICAgICAgLy8gdXNlIHRoZSBIVE1MNSBIaXN0b3J5IEFQSVxuICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXG4gIH1dKVxuICAucnVuKGZ1bmN0aW9uKCRyb290U2NvcGUsICRsb2NhdGlvbiwgJHJvdXRlKXtcblxuICAgIC8vIEZhY2Vib29rIElEXG4gICAgJHJvb3RTY29wZS5mYWNlYm9va0FwcElkID0gJzE0MTY4NTYxNDE5NDc3NTcnO1xuXG4gIFx0JHJvb3RTY29wZS4kb24oJyR2aWV3Q29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcblxuICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoJGxvY2F0aW9uLnBhdGgoKT09PScvJyl7XG4gICAgICAgICAgaWYoJCh3aW5kb3cpLndpZHRoKCk8MTAyNSl7XG4gICAgICAgICAgICAkKCcjbWVudSAucmlnaHQnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCcjbWVudSAucmlnaHQnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgJCgnI21lbnUgLnJpZ2h0JykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHBhcmEgcXVlIGdvb2dsZSBhbmFseXRpY3MgY29qYSBlbCByb290XG4gICAgICBnYSgnc2VuZCcsICdwYWdldmlldycsICRsb2NhdGlvbi5wYXRoKCkpO1xuXG4gICAgICAkKGRvY3VtZW50KS5mb3VuZGF0aW9uKCdvcmJpdCcsIHtcbiAgICAgICAgYW5pbWF0aW9uOiAnc2xpZGUnLFxuICAgICAgICBuZXh0X29uX2NsaWNrOiBmYWxzZSxcbiAgICAgICAgcGF1c2Vfb25fY2xpY2s6IGZhbHNlLFxuICAgICAgICB0aW1lcl9zcGVlZDogNTAwMCxcbiAgICAgICAgcGF1c2Vfb25faG92ZXI6IGZhbHNlLFxuICAgICAgICByZXN1bWVfb25fbW91c2VvdXQ6IHRydWUsXG4gICAgICAgIHRpbWVyOiB0cnVlLFxuICAgICAgICBzbGlkZV9udW1iZXI6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICAgICAgICAgJChkb2N1bWVudCkuZm91bmRhdGlvbigpO1xuICAgICAgfSwgNTAwKTtcblxuICAgIH0pO1xuXG4gICAgJHJvb3RTY29wZS4kb24oJyRyb3V0ZUNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbihjdXJyZW50Um91dGUsIHByZXZpb3VzUm91dGUpe1xuXG4gICAgICAvLyBjaGFuZ2luZyB0aGUgbWFpbiBzdHlsZSBkZXBlbmRpbmcgdGhlIHNlY3Rpb24gKC5kbGMtd2hpdGUsIC5kbGMtYmxhY2spXG4gICAgICB2YXIgdXJsRmlyc3RTdGVwID0gJGxvY2F0aW9uLnVybCgpO1xuICAgICAgdXJsRmlyc3RTdGVwID0gdXJsRmlyc3RTdGVwLnNwbGl0KCcvJyk7XG5cbiAgICAgIGlmKHVybEZpcnN0U3RlcFsyXT09PSdjYXRhbG9ndWUnKXtcbiAgICAgICAgJHJvb3RTY29wZS5kbGNXaGl0ZSA9IHRydWU7XG4gICAgICAgICRyb290U2NvcGUuZGxjQmxhY2sgPSBmYWxzZTtcbiAgICAgICAgJHJvb3RTY29wZS5sb2dvV2hpdGUgPSBmYWxzZTtcbiAgICAgICAgJHJvb3RTY29wZS5sb2dvQmxhY2sgPSB0cnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgICRyb290U2NvcGUuZGxjV2hpdGUgPSBmYWxzZTtcbiAgICAgICAgJHJvb3RTY29wZS5kbGNCbGFjayA9IHRydWU7XG4gICAgICAgICRyb290U2NvcGUubG9nb1doaXRlID0gdHJ1ZTtcbiAgICAgICAgJHJvb3RTY29wZS5sb2dvQmxhY2sgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy9DaGFuZ2UgcGFnZSB0aXRsZSwgYmFzZWQgb24gUm91dGUgaW5mb3JtYXRpb25cbiAgICAgICRyb290U2NvcGUudGl0bGUgPSAkcm91dGUuY3VycmVudC50aXRsZTtcbiAgICB9KTtcblxuICB9KTtcbid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmNvbnRyb2xsZXIoJ01haW5DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uKSB7XG5cbiAgICAkc2NvcGUudXJsID0gJGxvY2F0aW9uLmFic1VybCgpO1xuXG4gICAgJHNjb3BlLm9uUG9kaXVtTG91bmdlID0gZnVuY3Rpb24oKXtcbiAgICAgICR3aW5kb3cuZ2EoJ3B1c2gnLCBbJ190cmFja0V2ZW50JywgJ2Jhbm5lcnMnLCAnb25Qb2RpdW1Mb3VuZ2UnXSk7XG4gICAgfVxuXG4gICAgLy8gcGFyYSB2aXN1YWxpemFyIGVsIGxvZ28gc2lsdmVyIGVuIGxhIGhvbWVcbiAgICAkc2NvcGUuaXNIb21lID0gZnVuY3Rpb24oKXtcbiAgICAgIHZhciBob21lID0gdHJ1ZTtcbiAgICAgIGlmKCRsb2NhdGlvbi51cmwoKSE9Jy8nKSBob21lID0gZmFsc2U7XG4gICAgICByZXR1cm4gaG9tZTtcbiAgICB9XG5cbn0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuY29udHJvbGxlcignSG9tZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBIb21lKSB7XG5cbiAgICAvLyBsYXRlc3QgbmV3cyB3b3JkcHJlc3NcbiAgICBIb21lLmdldExhdGVzdE5ld3MoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICRzY29wZS5sYXRlc3ROZXdzID0gZGF0YTtcbiAgICB9KTtcblxufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5jb250cm9sbGVyKCdDb250YWN0Q3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIENvbnRhY3QsICRsb2NhdGlvbikge1xuXG4gICAgdmFyIG1hc3RlciA9IHt9O1xuXG4gICAgLy8gQ291bnRyaWVzXG4gICAgQ29udGFjdC5nZXRDb3VudHJpZXMoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICRzY29wZS5jb3VudHJpZXMgPSBkYXRhO1xuICAgIH0pO1xuXG4gICAgLy8gVHlwZSByZXF1ZXN0XG4gICAgQ29udGFjdC5nZXRUeXBlUmVxdWVzdCgpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgJHNjb3BlLnR5cGVzID0gZGF0YTtcbiAgICB9KTsgXG5cbiAgICAvLyBGaW5kIHVzXG4gICAgQ29udGFjdC5nZXRGaW5kVXMoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICRzY29wZS5maW5kcyA9IGRhdGE7XG4gICAgfSk7XG5cbiAgICAkc2NvcGUubmV3c2xldHRlciA9IHRydWU7XG5cbiAgICAvLyBjb21wb3J0YW1pZW50b1xuICAgICRzY29wZS5vblNlbmQgPSBmdW5jdGlvbih2YWxpZCl7XG4gICAgICBpZih2YWxpZCl7XG4gICAgICAgIENvbnRhY3Quc2V0Rm9ybSgkc2NvcGUpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIGlmKGRhdGFbMF0uQ29kX2Vycm9yPT0wKXtcbiAgICAgICAgICAgICRzY29wZS5tc2cgPSBcIlRoYW5rIHlvdSBmb3IgeW91ciB0aW1lLCB3ZSBlbmRlYXZvdXIgdG8gcmVzcG9uZCB0byBhbGwgcXVlcmllcyBhcyBzb29uIGFzIHBvc3NpYmxlLlwiO1xuICAgICAgICAgICAgJCgnI2NvbnRhY3QtbW9kYWwtc3VjY2VzcycpLmZvdW5kYXRpb24oJ3JldmVhbCcsICdvcGVuJyk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkc2NvcGUubXNnID0gXCJXZSBhcG9sb2dpemUgZm9yIHRoaXMgaW5jb252ZW5pZW5jZSwgYnV0IGFuIGVycm9yIGhhcyBiZWVuIGRldGVjdGVkLlxcbiBQbGVhc2UsIHRyeSBhZ2FpbiBvciBzZW5kIHVzIGEgZW1haWwgdG86IHdlYm1hc3RlckBkZWxhY291ci5jaFwiO1xuICAgICAgICAgICAgJCgnI2NvbnRhY3QtbW9kYWwtYWxlcnQnKS5mb3VuZGF0aW9uKCdyZXZlYWwnLCAnb3BlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgJHNjb3BlLm1zZyA9ICdQbGVhc2UsIGNoZWNrIHRoZSByZXF1aXJlZCBmaWVsZHMuJztcbiAgICAgICAgJCgnI2NvbnRhY3QtbW9kYWwtYWxlcnQnKS5mb3VuZGF0aW9uKCdyZXZlYWwnLCAnb3BlbicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbXBvcnRhbWllbnRvIHNpIGNpZXJyYW4gbGEgdmVudGFuYSBtb2RhbFxuICAgICRzY29wZS5vbkNsb3NlTW9kYWwgPSBmdW5jdGlvbigpe1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cblxufSk7XG5cbi8qKioqKiogR09PR0xFIE1BUFMgKioqKioqKiovXG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5jb250cm9sbGVyKCdTdG9yZUxvY2F0b3JDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xuICBcdCQuZ2V0U2NyaXB0KFwianMvc3RvcmUtbG9jYXRvci9zdG9yZS1sb2NhdG9yLmpzXCIpXG5cdCAgLmRvbmUoZnVuY3Rpb24oIHNjcmlwdCwgdGV4dFN0YXR1cyApIHtcblx0ICAgIFxuXHQgIH0pXG5cdCAgLmZhaWwoZnVuY3Rpb24oIGpxeGhyLCBzZXR0aW5ncywgZXhjZXB0aW9uICkge1xuXHQgICAgY29uc29sZS5sb2coIFwiZXJyb3I6XCIrZXhjZXB0aW9uICk7XG5cdH0pO1xufSk7XG5cbmZ1bmN0aW9uIHNob3dWaWRlbygpe1xuXHQkKFwiLmltYWdlLXZpZGVvXCIpLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG5cdCQoXCIjdmlkZW9cIikuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XG59XG4ndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5jb250cm9sbGVyKCdDb2xsZWN0aW9uQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImRlbnRybyBjb2xsZWN0aW9uXCIpO1xufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5jb250cm9sbGVyKCdXYXRjaGVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFdhdGNoZXMsICRsb2NhdGlvbiwgJHJvdXRlUGFyYW1zKSB7XG5cbiAgICAvLyBnZXQgc2NvcGUgZmFtaWx5IG8gYWxsXG4gICAgJHNjb3BlLmZhbWlseSA9ICRyb3V0ZVBhcmFtcy5jb2xsZWN0aW9uO1xuICAgIGlmKCRzY29wZS5mYW1pbHk9PXVuZGVmaW5lZCkgJHNjb3BlLmZhbWlseT0nYWxsJztcblxuICAgIHZhciByZWYgPSAkbG9jYXRpb24udXJsKCkuc3BsaXQoXCIvXCIpO1xuICAgIHJlZiA9IHJlZltyZWYubGVuZ3RoLTFdO1xuXG4gICAgLy8gd2F0Y2hlc1xuICAgIFdhdGNoZXMuZ2V0V2F0Y2hlcygkc2NvcGUuZmFtaWx5KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICRzY29wZS53YXRjaGVzID0gZGF0YTtcblxuICAgICAgLy8gZ2V0IHRoZSBmYW1pbGllcyBvZiB0aGUgc2VsZWN0aW9uXG4gICAgICAkc2NvcGUuZmFtaWxpZXMgPSBbXTtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChkYXRhLCBmdW5jdGlvbih2MSl7XG4gICAgICAgIHZhciBpbnNpZGUgPSBmYWxzZTtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS5mYW1pbGllcyxmdW5jdGlvbih2Mil7XG4gICAgICAgICAgaWYodjEuZmFtaWx5TmFtZT09djIpe1xuICAgICAgICAgICAgaW5zaWRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZighaW5zaWRlICYmIHYxLmZhbWlseU5hbWUhPSdzcGVjaWFsdGltZXBpZWNlcycpICRzY29wZS5mYW1pbGllcy5wdXNoKHYxLmZhbWlseU5hbWUpO1xuXG4gICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgJHNjb3BlLnNob3dfcG93ZXJfcmVzZXJ2ZSA9IHRydWU7XG5cbiAgICAvLyBnZXQgd2F0Y2ggZGV0YWlsXG4gICAgV2F0Y2hlcy5nZXRXYXRjaERldGFpbChyZWYpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgICAkc2NvcGUud2F0Y2hEZXRhaWwgPSBkYXRhO1xuXG4gICAgICAvLyBleGNlcGNpb25lcyBlbiBsYSBjb3JyZWEgKG5vIHRvZGEgbGEgY29sZWNjacOzbiBsbGV2YSBlbCBtaXNtbyB0aXBvKVxuICAgICAgLy8gaWYoJHNjb3BlLndhdGNoRGV0YWlsLnJlZj09J1dBVEkwMDk4LTE0MzAnKXtcbiAgICAgIC8vICAgJHNjb3BlLndhdGNoRGV0YWlsLnN0cmFwID0gJ1J1YmJlcic7XG4gICAgICAvLyB9XG5cbiAgICAgIGlmKCRzY29wZS53YXRjaERldGFpbC5zdG9uZXM9PScnKXtcbiAgICAgICAgJHNjb3BlLndhdGNoRGV0YWlsLnN0b25lc1Nob3c9MDtcbiAgICAgIH1lbHNle1xuICAgICAgICAkc2NvcGUud2F0Y2hEZXRhaWwuc3RvbmVzU2hvdz0xO1xuICAgICAgfVxuXG4gICAgICBXYXRjaGVzLmdldFdhdGNoZXNDb2xsZWN0aW9uKGRhdGEuY29sbGVjdGlvbikudGhlbihmdW5jdGlvbihkYXRhKSB7XG5cbiAgICAgICAgJHNjb3BlLndhdGNoZXNDb2xsZWN0aW9uID0gZGF0YTtcblxuICAgICAgfSk7XG5cbiAgICB9KTtcblxuXG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmNvbnRyb2xsZXIoJ0N1c3RvbWl6ZVdhdGNoQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAkLmdldFNjcmlwdChcImpzL2NvbGxlY3Rpb25zL2N1c3RvbWl6ZS13YXRjaC5qc1wiKVxuICAgIC5kb25lKGZ1bmN0aW9uKCBzY3JpcHQsIHRleHRTdGF0dXMgKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImRlbnRybyBjdXN0b21pemVcIik7XG4gICAgfSlcbiAgICAuZmFpbChmdW5jdGlvbigganF4aHIsIHNldHRpbmdzLCBleGNlcHRpb24gKSB7XG4gICAgICBjb25zb2xlLmxvZyggXCJlcnJvcjpcIitleGNlcHRpb24gKTtcbiAgfSk7XG59KTtcblxuLy8gc3BlY2lhbHRpZXNcbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5jb250cm9sbGVyKCdTcGVjaWFsdGllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgJC5nZXRTY3JpcHQoXCJqcy9jb2xsZWN0aW9ucy9zcGVjaWFsdGllcy5qc1wiKVxuICAgIC5kb25lKGZ1bmN0aW9uKCBzY3JpcHQsIHRleHRTdGF0dXMgKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImRlbnRybyBzcGVjaWFsdGllc1wiKTtcbiAgICB9KVxuICAgIC5mYWlsKGZ1bmN0aW9uKCBqcXhociwgc2V0dGluZ3MsIGV4Y2VwdGlvbiApIHtcbiAgICAgIGNvbnNvbGUubG9nKCBcImVycm9yOlwiK2V4Y2VwdGlvbiApO1xuICB9KTtcbn0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuY29udHJvbGxlcignUmVlZlNhdmVyQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAkLmdldFNjcmlwdChcImpzL2NvbGxlY3Rpb25zL3JlZWYtc2F2ZXItZGVlcC5qc1wiKVxuICAgIC5kb25lKGZ1bmN0aW9uKCBzY3JpcHQsIHRleHRTdGF0dXMgKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImRlbnRybyByZWVmXCIpO1xuICAgIH0pXG4gICAgLmZhaWwoZnVuY3Rpb24oIGpxeGhyLCBzZXR0aW5ncywgZXhjZXB0aW9uICkge1xuICAgICAgY29uc29sZS5sb2coIFwiZXJyb3JlOlwiK2V4Y2VwdGlvbiApO1xuICB9KTtcbn0pO1xuXG4gYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmNvbnRyb2xsZXIoJ0JpY2hyb25vU2FnYUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgJC5nZXRTY3JpcHQoIFwianMvdGltZWxpbmVqcy9zdG9yeWpzLWVtYmVkLmpzXCIgKVxuICAgIC5kb25lKGZ1bmN0aW9uKCBzY3JpcHQsIHRleHRTdGF0dXMgKSB7XG4gICAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICAgY3JlYXRlU3RvcnlKUyh7XG4gICAgICAgICAgICAgdHlwZTogICAgICAgJ3RpbWVsaW5lJyxcbiAgICAgICAgICAgICB3aWR0aDogICAgICAnMTAwJScsXG4gICAgICAgICAgICAgaGVpZ2h0OiAgICAgJzY1MCcsXG4gICAgICAgICAgICAgc291cmNlOiAgICAgJ2pzb24vYmljaHJvbm8vYmljaHJvbm8tdGltZWxpbmUuanNvbicsXG4gICAgICAgICAgICAgZW1iZWRfaWQ6ICAgJ2JpY2hyb25vLXNhZ2EnLFxuICAgICAgICAgICAgIG1hcHR5cGU6ICAgICd3YXRlcmNvbG9yJywgXG4gICAgICAgICAgICAgc3RhcnRfem9vbV9hZGp1c3Q6ICAnMScsIFxuICAgICAgICAgICAgIGNzczogICAgICAgICdjc3MvdGltZWxpbmVqcy90aW1lbGluZS5jc3MnLCAgICAgLy9PUFRJT05BTCBQQVRIIFRPIENTU1xuICAgICAgICAgICAgIGpzOiAgICAgICAgICdqcy90aW1lbGluZWpzL3RpbWVsaW5lLW1pbi5qcydcbiAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuZmFpbChmdW5jdGlvbigganF4aHIsIHNldHRpbmdzLCBleGNlcHRpb24gKSB7XG4gICAgICBjb25zb2xlLmxvZyggXCJlcnJvclwiICk7XG4gIH0pO1xufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5kaXJlY3RpdmUoJ2NhcmFjdGVyZScsIGZ1bmN0aW9uICgkZmlsdGVyLCBDb2xsZWN0aW9ucykge1xuXG4gICAgcmV0dXJue1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZGlyZWN0aXZlcy9jaXR5LWVnby1jYXJhY3RlcmUuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnQ2l0eUN0cmwnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUpe1xuICAgICAgICAvLyBDaXR5IENhcmFjdGVyZVxuICAgICAgQ29sbGVjdGlvbnMuZ2V0Q2l0eUNhcmFjdGVyZVNsaWRlcigpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAvLyBmaWx0cmFtb3NcbiAgICAgICAgc2NvcGUuc2xpZGVyQ2l0eUNhcmFjdGVyZSA9ICRmaWx0ZXIoJ3NsaWRlckNvbnRlbnQnKShkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgJChkb2N1bWVudCkuZm91bmRhdGlvbigpO1xuICAgICAgfVxuICAgIH1cblxuICB9KTtcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmRpcmVjdGl2ZSgnZXBpc29kZScsIGZ1bmN0aW9uICgkZmlsdGVyLCBDb2xsZWN0aW9ucykge1xuXG4gICAgcmV0dXJue1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZGlyZWN0aXZlcy9jaXR5LWVnby1lcGlzb2RlLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0NpdHlDdHJsJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlKXtcbiAgICAgICAgLy8gQ2l0eSBDYXJhY3RlcmVcbiAgICAgIENvbGxlY3Rpb25zLmdldENpdHlFcGlzb2RlU2xpZGVyKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG5cbiAgICAgICAgLy8gZmlsdHJhbW9zXG4gICAgICAgIHNjb3BlLnNsaWRlckNpdHlFcGlzb2RlID0gJGZpbHRlcignc2xpZGVyQ29udGVudCcpKGRhdGEpO1xuICAgICAgfSk7XG4gICAgICAkKGRvY3VtZW50KS5mb3VuZGF0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuZGlyZWN0aXZlKCdjaHJvbm80NScsIGZ1bmN0aW9uICgpIHtcblxuICAgIHJldHVybntcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RpcmVjdGl2ZXMvY2l0eS1lZ28tY2hyb25vLTQ1Lmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0NpdHlDdHJsJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlKXtcbiAgICAgICAgLy8gQ2l0eSBDaHJvbm8gNDVcbiAgICAgIENvbGxlY3Rpb25zLmdldENpdHlFcGlzb2RlU2xpZGVyKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIC8vIGZpbHRyYW1vc1xuICAgICAgICBzY29wZS5zbGlkZXJDaXR5RXBpc29kZSA9ICRmaWx0ZXIoJ3NsaWRlckNvbnRlbnQnKShkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgJChkb2N1bWVudCkuZm91bmRhdGlvbigpO1xuICAgICAgfVxuICAgIH1cblxuICB9KTtcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmNvbnRyb2xsZXIoJ0NpdHlDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCAkcm91dGVQYXJhbXMsICRmaWx0ZXIsIENvbGxlY3Rpb25zKSB7XG5cbiAgICAkc2NvcGUubW9kZWxvID0gJHJvdXRlUGFyYW1zLm1vZGVsbztcblxuICAgICRzY29wZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uKHJvdXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZSA9PT0gJGxvY2F0aW9uLnBhdGgoKTtcbiAgICB9XG5cbiAgICAvLyBDaXR5XG4gICAgQ29sbGVjdGlvbnMuZ2V0Q2l0eVNsaWRlcigpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgLy8gZmlsdHJhbW9zXG4gICAgICAkc2NvcGUuc2xpZGVyQ2l0eSA9ICRmaWx0ZXIoJ3NsaWRlckNvbnRlbnQnKShkYXRhKTtcbiAgICB9KTtcblxufSk7XG4ndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5jb250cm9sbGVyKCdQcmVzc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBQcmVzcykge1xuICAgIFxuICAgIC8vIFByZXNzIFJlbGVhc2VcbiAgICBQcmVzcy5nZXRQcmVzc1JlbGVhc2VzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAkc2NvcGUucHJlc3NSZWxlYXNlcyA9IGRhdGE7XG4gICAgfSk7XG5cbiAgICAvLyBQcmVzcyBSZWxlYXNlIE5ld3NcbiAgICBQcmVzcy5nZXRQcmVzc1JlbGVhc2VzTmV3cygpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgJHNjb3BlLnByZXNzUmVsZWFzZXNOZXdzID0gZGF0YTtcbiAgICB9KTtcblxuICAgIC8vIEFkIFZpc3VhbHNcbiAgICBQcmVzcy5nZXRBZFZpc3VhbHMoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICRzY29wZS5hZFZpc3VhbHMgPSBkYXRhO1xuICAgIH0pO1xuXG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmNvbnRyb2xsZXIoJ0VkaXRvcmlhbEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZmlsdGVyLCAkbG9jYXRpb24sICRyb3V0ZVBhcmFtcywgUHJlc3MpIHtcblxuICAgICQoJy5hbGVydC1ib3gnKS5oaWRlKCk7XG4gICAgJCgnI21vZGFsLWNsaXBwaW5ncycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcblxuICAgICRzY29wZS55ZWFyID0gJHJvdXRlUGFyYW1zLnllYXI7XG4gICAgJHNjb3BlLmNvdW50cnkgPSAkcm91dGVQYXJhbXMuY291bnRyeTtcbiAgICAkc2NvcGUuY2xpcCA9ICRyb3V0ZVBhcmFtcy5jbGlwO1xuXG4gICAgY29uc29sZS5sb2coXCJoYXkgQ2xpcDpcIiskc2NvcGUuY2xpcCk7XG5cbiAgICAvLyBFZGl0b3JpYWxcbiAgICBQcmVzcy5nZXRFZGl0b3JpYWwoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICRzY29wZS5lZGl0b3JpYWxGdWxsID0gZGF0YTtcbiAgICAgICRzY29wZS5lZGl0b3JpYWwgPSAkc2NvcGUuZWRpdG9yaWFsRnVsbDtcbiAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5lZGl0b3JpYWwpO1xuICAgICAgLy8gZmlsdHJhbW9zXG4gICAgICAkc2NvcGUuZWRpdG9yaWFsID0gJGZpbHRlcignZWRpdG9yaWFsJykoJHNjb3BlLmVkaXRvcmlhbEZ1bGwsICRyb3V0ZVBhcmFtcy55ZWFyLCAkcm91dGVQYXJhbXMuY291bnRyeSk7XG4gICAgfSk7XG5cbiAgICAvLyBDb3VudHJpZXNcbiAgICBQcmVzcy5nZXRDb3VudHJpZXMoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICRzY29wZS5jb3VudHJpZXMgPSBkYXRhO1xuICAgICAgJHNjb3BlLnNlbGVjdGVkQ291bnRyeSA9ICRyb3V0ZVBhcmFtcy5jb3VudHJ5O1xuICAgIH0pO1xuXG4gICAgLy8gWWVhcnNcbiAgICBQcmVzcy5nZXRZZWFycygpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgJHNjb3BlLnllYXJzID0gZGF0YTtcbiAgICB9KTtcblxuICAgICRzY29wZS5vbkNoYW5nZUNvdW50cnkgPSBmdW5jdGlvbihjb3VudHJ5KXtcbiAgICAgIGNvbnNvbGUubG9nKFwiY291bnRyeTpcIitjb3VudHJ5KTtcbiAgICAgICRsb2NhdGlvbi5wYXRoKCcvZWRpdG9yaWFsLycrJHNjb3BlLnllYXIrJy8nK2NvdW50cnkpO1xuICAgIH1cblxuICAgICRzY29wZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uKHllYXIpIHtcbiAgICAgIGlmICh5ZWFyLmRhdGEgPT0gJHJvdXRlUGFyYW1zLnllYXIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgICRzY29wZS5vbkNsaXAgPSBmdW5jdGlvbihpZCl7XG4gICAgICAkc2NvcGUuY2xpcCA9IE51bWJlcihpZCk7XG5cbiAgICAgICRzY29wZS5jbGlwSW1hZ2UgPSAkc2NvcGUuZWRpdG9yaWFsW2lkXS5pbWFnZTtcbiAgICAgICRzY29wZS5jbGlwWWVhciA9ICRzY29wZS5lZGl0b3JpYWxbaWRdLnllYXI7XG4gICAgICAkc2NvcGUuY2xpcENhcHRpb24gPSAkc2NvcGUuZWRpdG9yaWFsW2lkXS5jYXB0aW9uO1xuICAgICAgJHNjb3BlLmNsaXBMaW5rID0gJHNjb3BlLmVkaXRvcmlhbFtpZF0ubGluaztcbiAgICAgICQoJyNtb2RhbC1jbGlwcGluZ3MnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgLy8gJGxvY2F0aW9uLnBhdGgoJy9lZGl0b3JpYWwvJyskcm91dGVQYXJhbXMueWVhcisnLycrJHJvdXRlUGFyYW1zLmNvdW50cnkrJy8nKyRyb3V0ZVBhcmFtcy5jbGlwKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLm9uWCA9IGZ1bmN0aW9uKCl7XG4gICAgICAkKCcjbW9kYWwtY2xpcHBpbmdzJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgIH07XG5cbiAgICAkc2NvcGUub25QcmV2ID0gZnVuY3Rpb24oaWQpe1xuICAgICAgdmFyIHByZXYgPSBpZC0xO1xuICAgICAgaWYocHJldj49MCl7XG4gICAgICAgICRzY29wZS5vbkNsaXAocHJldik7XG4gICAgICB9XG4gICAgfTtcblxuICAgICRzY29wZS5vbk5leHQgPSBmdW5jdGlvbihpZCl7XG4gICAgICB2YXIgbmV4dCA9IGlkKzE7XG4gICAgICAkc2NvcGUub25DbGlwKG5leHQpO1xuICAgIH07XG5cbn0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuZGlyZWN0aXZlKCdjbGVhcmluZycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9kaXJlY3RpdmVzL2VkaXRvcmlhbC1jbGVhcmluZy5odG1sJyxcbiAgICB9XG59KTtcblxuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuZmFjdG9yeSgnQ29udGFjdCcsIGZ1bmN0aW9uKCRodHRwLCAkcSkge1xuXG4gIFx0dmFyIGdldENvdW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICRodHRwLmdldCgnanNvbi9jb250YWN0L2NvdW50cmllcy5qc29uJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0VHlwZVJlcXVlc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgICAkaHR0cC5nZXQoJ2pzb24vY29udGFjdC90eXBlUmVxdWVzdC5qc29uJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0RmluZFVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgJGh0dHAuZ2V0KCdqc29uL2NvbnRhY3QvZmluZFVzLmpzb24nKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHZhciBzZXRGb3JtID0gZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgJGh0dHAucG9zdCgncGhwL2NvbnRhY3QucGhwJywgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAnZmlyc3ROYW1lJzogJHNjb3BlLnVzZXIuZmlyc3ROYW1lLCBcbiAgICAgICAgICAgICdsYXN0TmFtZSc6ICRzY29wZS51c2VyLmxhc3ROYW1lLCBcbiAgICAgICAgICAgICdlbWFpbCc6ICRzY29wZS51c2VyLmVtYWlsLCBcbiAgICAgICAgICAgICd0ZWxlcGhvbmUnOiAkc2NvcGUudXNlci50ZWxlcGhvbmUsIFxuICAgICAgICAgICAgJ2NvdW50cnknOiAkc2NvcGUudXNlci5jb3VudHJ5LCBcbiAgICAgICAgICAgICdjaXR5JzogJHNjb3BlLnVzZXIuY2l0eSwgXG4gICAgICAgICAgICAncG9zdGFsQ29kZSc6ICRzY29wZS51c2VyLnBvc3RhbENvZGUsIFxuICAgICAgICAgICAgJ3R5cGVSZXF1ZXN0JzogJHNjb3BlLnVzZXIudHlwZVJlcXVlc3QsIFxuICAgICAgICAgICAgJ2ZpbmRVcyc6ICRzY29wZS51c2VyLmZpbmRVcywgXG4gICAgICAgICAgICAnY29tbWVudHMnOiAkc2NvcGUudXNlci5jb21tZW50cywgXG4gICAgICAgICAgICAnbmV3c2xldHRlcic6ICRzY29wZS5uZXdzbGV0dGVyXG4gICAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSwgc3RhdHVzKXtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICByZXR1cm57XG4gICAgXHRnZXRDb3VudHJpZXM6IGdldENvdW50cmllcyxcbiAgICAgICAgZ2V0VHlwZVJlcXVlc3Q6IGdldFR5cGVSZXF1ZXN0LFxuICAgICAgICBnZXRGaW5kVXM6IGdldEZpbmRVcyxcbiAgICAgICAgc2V0Rm9ybTogc2V0Rm9ybVxuICAgIH07XG5cbn0pO1xuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuZmFjdG9yeSgnUHJlc3MnLCBmdW5jdGlvbigkaHR0cCwgJHEpIHtcblxuICBcdHZhciBnZXRQcmVzc1JlbGVhc2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgJGh0dHAuZ2V0KCdqc29uL3ByZXNzL3ByZXNzLXJlbGVhc2UtY29sbGVjdGlvbi5qc29uJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0UHJlc3NSZWxlYXNlc05ld3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgICAkaHR0cC5nZXQoJ2pzb24vcHJlc3MvcHJlc3MtcmVsZWFzZS1uZXdzLmpzb24nKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHZhciBnZXRBZFZpc3VhbHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgICAkaHR0cC5nZXQoJ2pzb24vcHJlc3MvY2FtcGFpZ24tYWR2ZXJ0aXNpbmcuanNvbicpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdmFyIGdldEVkaXRvcmlhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICRodHRwLmdldCgnanNvbi9wcmVzcy9lZGl0b3JpYWwuanNvbicpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goZGF0YSwgZnVuY3Rpb24odmFsdWUsa2V5KXtcbiAgICAgICAgICAgICAgICB2YXIgeWVhciA9IGRhdGFba2V5XS5kYXRlLnNwbGl0KCctJyk7XG4gICAgICAgICAgICAgICAgeWVhciA9IHllYXJbMF07XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldLnllYXIgPSB5ZWFyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9XG5cbiAgICB2YXIgZ2V0Q291bnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgJGh0dHAuZ2V0KCdqc29uL3ByZXNzL2VkaXRvcmlhbENvdW50cmllcy5qc29uJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0WWVhcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgICAkaHR0cC5nZXQoJ2pzb24vcHJlc3MvZWRpdG9yaWFsWWVhcnMuanNvbicpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJue1xuICAgIFx0Z2V0UHJlc3NSZWxlYXNlczogZ2V0UHJlc3NSZWxlYXNlcyxcbiAgICBcdGdldFByZXNzUmVsZWFzZXNOZXdzOiBnZXRQcmVzc1JlbGVhc2VzTmV3cyxcbiAgICBcdGdldEFkVmlzdWFsczogZ2V0QWRWaXN1YWxzLFxuICAgICAgICBnZXRFZGl0b3JpYWw6IGdldEVkaXRvcmlhbCxcbiAgICAgICAgZ2V0Q291bnRyaWVzOiBnZXRDb3VudHJpZXMsXG4gICAgICAgIGdldFllYXJzOiBnZXRZZWFyc1xuICAgIH1cblxufSk7XG4ndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5mYWN0b3J5KCdIb21lJywgZnVuY3Rpb24oJGh0dHAsICRxKSB7XG5cbiAgICB2YXIgbWVzZXMgPSBbJ0VORScsJ0ZFQicsJ01BUicsJ0FCUicsJ01BWScsJ0pVTicsJ0pVTCcsJ0FHTycsJ1NFUCcsJ09DVCcsJ05PVicsJ0RJQyddO1xuXG4gICAvLyBoYWNlbW9zIHVuIGdldCBkZSBsYXMgdWx0aW1hcyBub3RpY2lhcyBkZWwgYmxvZyAtIHBsdWdpbiBcbiAgICB2YXIgZ2V0TGF0ZXN0TmV3cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICRodHRwLmdldCgnaHR0cDovL3d3dy5kZWxhY291ci5jaC9uZXdzLz9qc29uPWdldF9wb3N0cyZjb3VudD01Jykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcblxuICAgICAgICAgICAgdmFyIHNhbGlkYSA9IFtdO1xuXG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goZGF0YS5wb3N0cywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGZlY2hhID0gdmFsdWUuZGF0ZTtcbiAgICAgICAgICAgICAgICBmZWNoYSA9IGZlY2hhLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5tZXMgPSBtZXNlc1tmZWNoYVsxXS0xXTtcbiAgICAgICAgICAgICAgICB2YXIgZGlhID0gZmVjaGFbMl0uc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgICAgIHZhbHVlLmRpYSA9IGRpYVswXTtcblxuICAgICAgICAgICAgICAgIHRoaXMucHVzaCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIH0sIHNhbGlkYSk7XG5cbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoc2FsaWRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHJldHVybntcbiAgICBcdGdldExhdGVzdE5ld3M6IGdldExhdGVzdE5ld3NcbiAgICB9XG5cbn0pO1xuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuZmFjdG9yeSgnQ29sbGVjdGlvbnMnLCBmdW5jdGlvbigkaHR0cCwgJHEpIHtcblxuICBcdHZhciBnZXRDaXR5U2xpZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgJGh0dHAuZ2V0KCdqc29uL2NvbGxlY3Rpb25zL2NpdHkvY2l0eS5qc29uJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0Q2l0eUNhcmFjdGVyZVNsaWRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICRodHRwLmdldCgnanNvbi9jb2xsZWN0aW9ucy9jaXR5L2NpdHktZWdvLWNhcmFjdGVyZS5qc29uJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0Q2l0eUVwaXNvZGVTbGlkZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgICAkaHR0cC5nZXQoJ2pzb24vY29sbGVjdGlvbnMvY2l0eS9jaXR5LWVnby1lcGlzb2RlLmpzb24nKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHJldHVybntcbiAgICBcdGdldENpdHlTbGlkZXI6IGdldENpdHlTbGlkZXIsXG4gICAgICAgIGdldENpdHlDYXJhY3RlcmVTbGlkZXI6IGdldENpdHlDYXJhY3RlcmVTbGlkZXIsXG4gICAgICAgIGdldENpdHlFcGlzb2RlU2xpZGVyOiBnZXRDaXR5RXBpc29kZVNsaWRlclxuICAgIH1cblxufSk7XG4ndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5mYWN0b3J5KCdXYXRjaGVzJywgZnVuY3Rpb24oJGh0dHAsICRxKSB7XG5cbiAgXHR2YXIgZ2V0V2F0Y2hlcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgJGh0dHAucG9zdCgncGhwL2dldC13YXRjaGVzLnBocCcsIHt9KS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuXG4gICAgICAgICAgICAvLyBzaW4gZXJyb3Jlc1xuICAgICAgICAgICAgaWYoIWRhdGFbMF0uQ29kX2Vycm9yKXtcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goZGF0YSwgZnVuY3Rpb24odmFsdWUsIGtleSl7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFba2V5XS5jb2xsZWN0aW9uTmFtZSA9IGFuZ3VsYXIudXBwZXJjYXNlKGRhdGFba2V5XS5jb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb250cm9sIGRlIGVycm9yZXNcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKGRhdGFbMF0uQ29kX2Vycm9yPT0xKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVswXS5EZXNfZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhWzBdLkRlc19lcnJvcik7ICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdmFyIGdldFdhdGNoZXNDb2xsZWN0aW9uID0gZnVuY3Rpb24oY29sbGVjdGlvbikge1xuXG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgJGh0dHAucG9zdCgncGhwL2dldC13YXRjaGVzLWNvbGxlY3Rpb24ucGhwJywgeydjb2xsZWN0aW9uJzpjb2xsZWN0aW9ufSkuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIC8vIHNpbiBlcnJvcmVzXG4gICAgICAgICAgICBpZighZGF0YVswXS5Db2RfZXJyb3Ipe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29udHJvbCBkZSBlcnJvcmVzXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZihkYXRhWzBdLkNvZF9lcnJvcj09MSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbMF0uRGVzX2Vycm9yKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVswXS5EZXNfZXJyb3IpOyAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHZhciBnZXRXYXRjaERldGFpbCA9IGZ1bmN0aW9uKHJlZikge1xuXG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgdmFyIHNhbGlkYSA9IHt9O1xuXG4gICAgICAgICRodHRwLnBvc3QoJ3BocC9nZXQtd2F0Y2gtZGV0YWlsLnBocCcsIHsncmVmJzpyZWZ9KS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuXG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goZGF0YSwgZnVuY3Rpb24odmFsdWUsIGtleSl7XG5cbiAgICAgICAgICAgICAgICBzYWxpZGEuY29sbGVjdGlvbiA9IGRhdGFba2V5XS5jb2xsZWN0aW9uO1xuICAgICAgICAgICAgICAgIHNhbGlkYS5yZWYgPSBkYXRhW2tleV0ucmVmO1xuICAgICAgICAgICAgICAgIHNhbGlkYS5kZXNjcmlwdGlvbiA9IGRhdGFba2V5XS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBzYWxpZGEucHJpY2UgPSBkYXRhW2tleV0ucHJpY2U7XG4gICAgICAgICAgICAgICAgc2FsaWRhLmxpbWl0ZWRFZGl0aW9uID0gZGF0YVtrZXldLmxpbWl0ZWRFZGl0aW9uO1xuICAgICAgICAgICAgICAgIHNhbGlkYS5jYWxpYnJlID0gZGF0YVtrZXldLmNhbGlicmU7XG4gICAgICAgICAgICAgICAgc2FsaWRhLmluc3RydWN0aW9uTWFudWFsID0gZGF0YVtrZXldLmluc3RydWN0aW9uTWFudWFsO1xuICAgICAgICAgICAgICAgIHNhbGlkYS5kaW1lbnNpb25zID0gZGF0YVtrZXldLmRpbWVuc2lvbnM7XG4gICAgICAgICAgICAgICAgc2FsaWRhLnR5cGVfbW92ZW1lbnQgPSBkYXRhW2tleV0udHlwZV9tb3ZlbWVudDtcbiAgICAgICAgICAgICAgICBzYWxpZGEucG93ZXJfcmVzZXJ2ZSA9IGRhdGFba2V5XS5wb3dlcl9yZXNlcnZlOyBpZihzYWxpZGEucG93ZXJfcmVzZXJ2ZT09MCkgc2FsaWRhLnBvd2VyX3Jlc2VydmUgPSAwO1xuICAgICAgICAgICAgICAgIHNhbGlkYS5mdW5jdGlvbnMgPSBkYXRhW2tleV0uZnVuY3Rpb25zO1xuICAgICAgICAgICAgICAgIHNhbGlkYS5nbGFzcyA9IGRhdGFba2V5XS5nbGFzcztcbiAgICAgICAgICAgICAgICBzYWxpZGEuYmFjayA9IGRhdGFba2V5XS5iYWNrOyBpZihzYWxpZGEuYmFjaz09J05VTEwnKSBzYWxpZGEuYmFjayA9IDA7XG4gICAgICAgICAgICAgICAgc2FsaWRhLndhdGVyX3Jlc2lzdGFudCA9IGRhdGFba2V5XS53YXRlcl9yZXNpc3RhbnQ7XG4gICAgICAgICAgICAgICAgc2FsaWRhLnN0cmFwID0gZGF0YVtrZXldLnN0cmFwO1xuICAgICAgICAgICAgICAgIHNhbGlkYS5oYW5kcyA9IGRhdGFba2V5XS5oYW5kcztcbiAgICAgICAgICAgICAgICBzYWxpZGEubGltaXRlZF9lZGl0aW9uID0gZGF0YVtrZXldLmxpbWl0ZWRfZWRpdGlvbjtcbiAgICAgICAgICAgICAgICBzYWxpZGEuY3Jvd24gPSBkYXRhW2tleV0uY3Jvd247XG4gICAgICAgICAgICAgICAgLy8gcG9uZW1vcyBoZy1zaG93IGEgMCBlbiBsb3MgcXVlIHRlbmdhbiB2YWxvciAwXG4gICAgICAgICAgICAgICAgc2FsaWRhLndoaXRlX2RpYV9jYXNlID0gZGF0YVtrZXldLndoaXRlX2RpYV9jYXNlOyBpZihzYWxpZGEud2hpdGVfZGlhX2Nhc2U9PScwJykgc2FsaWRhLndoaXRlX2RpYV9jYXNlID0gMDtcbiAgICAgICAgICAgICAgICBzYWxpZGEuYmxhY2tfZGlhX2Nhc2UgPSBkYXRhW2tleV0uYmxhY2tfZGlhX2Nhc2U7IGlmKHNhbGlkYS5ibGFja19kaWFfY2FzZT09JzAnKSBzYWxpZGEuYmxhY2tfZGlhX2Nhc2UgPSAwO1xuICAgICAgICAgICAgICAgIHNhbGlkYS53aGl0ZV9kaWFfZGlhbCA9IGRhdGFba2V5XS53aGl0ZV9kaWFfZGlhbDsgaWYoc2FsaWRhLndoaXRlX2RpYV9kaWFsPT0nMCcpIHNhbGlkYS53aGl0ZV9kaWFfZGlhbCA9IDA7XG4gICAgICAgICAgICAgICAgc2FsaWRhLmJsYWNrX2RpYV9kaWFsID0gZGF0YVtrZXldLmJsYWNrX2RpYV9kaWFsOyBpZihzYWxpZGEuYmxhY2tfZGlhX2RpYWw9PScwJykgc2FsaWRhLmJsYWNrX2RpYV9kaWFsID0gMDtcbiAgICAgICAgICAgICAgICBzYWxpZGEuY29sb3Jfc3RvbmVzX2RpYWwgPSBkYXRhW2tleV0uY29sb3Jfc3RvbmVzX2RpYWw7IGlmKHNhbGlkYS5jb2xvcl9zdG9uZXNfZGlhbD09JzAnKSBzYWxpZGEuY29sb3Jfc3RvbmVzX2RpYWwgPSAwO1xuICAgICAgICAgICAgICAgIHNhbGlkYS5kaWFsX2Rlc2NyaXB0aW9uID0gZGF0YVtrZXldLmRpYWxfZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgc2FsaWRhLm5ldyA9IGRhdGFba2V5XS5uZXc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShzYWxpZGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJue1xuICAgIFx0Z2V0V2F0Y2hlczogZ2V0V2F0Y2hlcyxcbiAgICAgICAgZ2V0V2F0Y2hlc0NvbGxlY3Rpb246IGdldFdhdGNoZXNDb2xsZWN0aW9uLFxuICAgICAgICBnZXRXYXRjaERldGFpbDogZ2V0V2F0Y2hEZXRhaWxcbiAgICB9XG5cbn0pO1xuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuZmlsdGVyKCdlZGl0b3JpYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVkaXRvcmlhbCwgeWVhciwgY291bnRyeSl7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiZWRpdG9yaWFsOlwiK2VkaXRvcmlhbCk7XG5cbiAgICAgIHZhciBzYWxpZGEgPSBbXTtcblxuICAgICAgXHRhbmd1bGFyLmZvckVhY2goZWRpdG9yaWFsLCBmdW5jdGlvbih2YWx1ZSwga2V5KXtcblxuICAgICAgICAgIHZhciBzdGF0dXMgPSBmYWxzZTtcblxuICAgICAgICAgIC8vIHNpIGVzIGludGVybmF0aW9uYWwgeSBhbGxcbiAgICBcdFx0XHRpZihjb3VudHJ5PT0nYWxsJyAmJiB5ZWFyPT0nYWxsJyl7XG4gICAgICAgIFx0XHRzdGF0dXMgPSB0cnVlO1xuICAgIFx0XHRcdH1lbHNlIGlmIChjb3VudHJ5PT0nYWxsJyAmJiB5ZWFyPT12YWx1ZS55ZWFyKXtcbiAgICAgICAgICAgIHN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgfWVsc2UgaWYgKGNvdW50cnk9PXZhbHVlLmNvdW50cnkgJiYgeWVhcj09J2FsbCcpe1xuICAgICAgICAgICAgc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICB9ZWxzZSBpZihjb3VudHJ5PT12YWx1ZS5jb3VudHJ5ICYmIHllYXI9PXZhbHVlLnllYXIpe1xuICAgICAgICAgICAgc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZihzdGF0dXMpe1xuICAgICAgICAgICAgc2FsaWRhLnB1c2godmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgXHR9KTtcblxuICAgICAgICAvLyBzaSBubyBoYXkgcmVzdWx0YWRvcyBtb3N0cmFtb3MgZWwgYWxlcnQtcGFuZWxcbiAgICAgICAgaWYgKHNhbGlkYS5sZW5ndGg9PTApe1xuICAgICAgICAgICQoJy5hbGVydC1ib3gnKS5zaG93KCk7XG4gICAgICAgIH1cblxuICAgICAgcmV0dXJuIHNhbGlkYTtcbiAgICB9XG59KTtcbid1c2Ugc3RyaWN0JztcblxuLy8qKiogZmlsdGVyIGxhdGVzdCBuZXdzIG5vIGRhdGEgZGUgd29yZHByZXNzIC0gY3VhbmRvIGhhY2lhIHVuIGdldCBkZSBsYXRlc3QtbmV3cy5qc29uICoqKiovL1xuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmZpbHRlcignbGF0ZXN0TmV3cycsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24obmV3cyl7XG5cblx0ICAgXHR2YXIgc2FsaWRhID0gW107XG5cblx0ICAgXHRhbmd1bGFyLmZvckVhY2gobmV3cywgZnVuY3Rpb24odmFsdWUsIGtleSl7XG5cdCAgIFx0XHRpZih2YWx1ZS5hY3RpdmU9PTEpe1xuXHQgICBcdFx0XHRzYWxpZGEucHVzaCh2YWx1ZSk7XG5cdCAgIFx0XHR9XG5cdCAgIFx0fSk7XG5cblx0ICAgIHJldHVybiBzYWxpZGE7XHRcblx0fVxufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5maWx0ZXIoJ3NsaWRlckNvbnRlbnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNvbnRlbnQpe1xuXG5cdCAgIFx0dmFyIHNhbGlkYSA9IFtdO1xuXG5cdCAgIFx0YW5ndWxhci5mb3JFYWNoKGNvbnRlbnQsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpe1xuXHQgICBcdFx0aWYodmFsdWUuYWN0aXZlPT0xKXtcblx0ICAgXHRcdFx0c2FsaWRhLnB1c2godmFsdWUpO1xuXHQgICBcdFx0fVxuXHQgICBcdH0pO1xuXG5cdCAgICByZXR1cm4gc2FsaWRhO1xuXHR9XG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmZpbHRlcignc2VsZWN0V2F0Y2hlcycsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oaXRlbXMsIGZhbWlseSl7XG5cbiAgICBcdHZhciBzYWxpZGEgPSBbXTtcblxuICAgIFx0aWYoZmFtaWx5PT0nYWxsJyB8fCBmYW1pbHk9PSd1bmRlZmluZWQnKXtcbiAgICBcdFx0c2FsaWRhID0gaXRlbXM7XG4gICAgXHR9ZWxzZXtcbiAgICBcdFx0Zm9yICh2YXIgaSA9IGl0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgXHRcdFx0aWYoaXRlbXNbaV0uZmFtaWx5TmFtZSA9PSBmYW1pbHkpe1xuICAgIFx0XHRcdFx0c2FsaWRhLnB1c2goaXRlbXNbaV0pO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fTtcbiAgICBcdH1cblxuXHQgICBcdHJldHVybiBzYWxpZGE7XG5cdH1cbn0pO1xuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuZGlyZWN0aXZlKCdzb2NpYWxCdG5zJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybntcbiAgICBcdHJlc3RyaWN0OiAnQScsXG4gICAgXHR0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RpcmVjdGl2ZXMvc29jaWFsLWJ0bnMuaHRtbCcsXG4gICAgXHRsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpe1xuICAgIFx0XHQgIGVsZW1lbnQuYmluZCgnbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIFx0XHQkKCcuc29jaWFsLWJhY2tncm91bmQnKS5jc3MoJ29wYWNpdHknLDAuNyk7XG4gICAgICAgICAgICAkKCcuc29jaWFsLWJ0bnMnKS5jc3MoJ29wYWNpdHknLDEpO1xuICAgICAgXHRcdH0pO1xuICAgICAgXHRcdGVsZW1lbnQuYmluZCgnbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgXHRcdCQoJy5zb2NpYWwtYmFja2dyb3VuZCcpLmNzcygnb3BhY2l0eScsMCk7XG4gICAgICAgICAgICAkKCcuc29jaWFsLWJ0bnMnKS5jc3MoJ29wYWNpdHknLDApO1xuICAgICAgXHRcdH0pO1xuICAgIFx0fSxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGltYWdlOiAnQCcsXG4gICAgICAgIHRpdGxlOiAnQCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQCcsXG4gICAgICAgIHRhZzogJ0AnLFxuICAgICAgICB1cmw6ICdAJ1xuICAgICAgfSBcbiAgICB9XG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmRpcmVjdGl2ZSgnZmFjZWJvb2tPcGVuR3JhcGgnLCBmdW5jdGlvbigkcm9vdFNjb3BlKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcInRpdGxlOlwiKyRyb290U2NvcGUudGl0bGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0IDogJ0UnLFxuICAgICAgLy8gc2NvcGU6IHtcbiAgICAgIC8vICAgdXJsOiAkcm9vdFNjb3BlLnRpdGxlICBcbiAgICAgIC8vIH0sXG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RpcmVjdGl2ZXMvZmFjZWJvb2stb3Blbi1ncmFwaC5odG1sJyxcbiAgICB9XG59KTtcblxuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuZGlyZWN0aXZlKCdzb2NpYWxzaGFyZScsIFsnJHdpbmRvdycsICckbG9jYXRpb24nLCBmdW5jdGlvbiBtYW5hZ2VEaXJlY3RpdmUgKCR3aW5kb3csICRsb2NhdGlvbikge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICdyZXN0cmljdCc6ICdBJyxcbiAgICAgICdsaW5rJzogZnVuY3Rpb24gbGlua2luZ0Z1bmN0aW9uICgkc2NvcGUsIGVsZW1lbnQsIGF0dHIpIHtcblxuICAgICAgICB2YXIga2V5LFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHt9LFxuICAgICAgICAgIHByb3BEZWZhdWx0cyA9IHtcbiAgICAgICAgICAndXJsJzogJycsXG4gICAgICAgICAgJ3Byb3ZpZGVyJzogJycsXG4gICAgICAgICAgJ3RleHQnOiAnJyxcbiAgICAgICAgICAnbWVkaWEnOiAnJyxcbiAgICAgICAgICAnaGFzaHRhZ3MnOiAnJyxcbiAgICAgICAgICAndmlhJzogJycsXG4gICAgICAgICAgJ3BvcHVwSGVpZ2h0JzogNTAwLFxuICAgICAgICAgICdwb3B1cFdpZHRoJzogNTAwXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gT2JzZXJ2ZSB0aGUgdmFsdWVzIGluIGVhY2ggb2YgdGhlIHByb3BlcnRpZXMgc28gdGhhdCBpZiB0aGV5J3JlIHVwZGF0ZWQgZWxzZXdoZXJlLFxuICAgICAgICAvLyB0aGV5IGFyZSB1cGRhdGVkIGluIHRoaXMgZGlyZWN0aXZlLlxuICAgICAgICBmb3IgKGtleSBpbiBwcm9wRGVmYXVsdHMpIHtcbiAgICAgICAgICBpZiAocHJvcERlZmF1bHRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnc29jaWFsc2hhcmUnICsga2V5LnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGlmIChhdHRyW2F0dHJpYnV0ZU5hbWVdKSB7XG4gICAgICAgICAgICAgIChmdW5jdGlvbiAoa2V5TmFtZSkge1xuICAgICAgICAgICAgICAgIGF0dHIuJG9ic2VydmUoYXR0cmlidXRlTmFtZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2tleU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0oa2V5KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBVc2UgdGhlIGRlZmF1bHRcbiAgICAgICAgICAgICAgcHJvcGVydGllc1trZXldID0gcHJvcERlZmF1bHRzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvcGVydGllcy5ldmVudFRyaWdnZXIgPSBhdHRyLnNvY2lhbHNoYXJlVHJpZ2dlciB8fCAnY2xpY2snO1xuXG4gICAgICAgICRzY29wZS5mYWNlYm9va1NoYXJlID0gZnVuY3Rpb24gbWFuYWdlRmFjZWJvb2tTaGFyZSAoZGF0YSkge1xuXG4gICAgICAgICAgJHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgJy8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PScgKyBlbmNvZGVVUkkoZGF0YS51cmwpXG4gICAgICAgICAgICAsJ3NoYXJlcicsICd0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9JyArIGRhdGEucG9wdXBXaWR0aCArICcsaGVpZ2h0PScgKyBkYXRhLnBvcHVwSGVpZ2h0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUudHdpdHRlclNoYXJlID0gZnVuY3Rpb24gbWFuYWdlVHdpdHRlclNoYXJlIChkYXRhKSB7XG4gICAgICAgICAgdmFyIHVybFN0cmluZyA9ICcvL3d3dy50d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/JztcblxuICAgICAgICAgIGlmIChkYXRhLnRleHQpIHtcbiAgICAgICAgICAgIHVybFN0cmluZyArPSAndGV4dD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEudGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRhdGEudmlhKSB7XG4gICAgICAgICAgICB1cmxTdHJpbmcgKz0gJyZ2aWE9JyArIGVuY29kZVVSSShkYXRhLnZpYSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRhdGEuaGFzaHRhZ3MpIHtcbiAgICAgICAgICAgIHVybFN0cmluZyArPSAnJmhhc2h0YWdzPScgKyBlbmNvZGVVUkkoZGF0YS5oYXNodGFncyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVmYXVsdCB0byB0aGUgY3VycmVudCBwYWdlIGlmIGEgVVJMIGlzbid0IHNwZWNpZmllZFxuICAgICAgICAgIHVybFN0cmluZyArPSAnJnVybD0nICsgZW5jb2RlVVJJKGRhdGEudXJsIHx8ICRsb2NhdGlvbi5hYnNVcmwoKSk7XG5cbiAgICAgICAgICAkd2luZG93Lm9wZW4oXG4gICAgICAgICAgICB1cmxTdHJpbmcsXG4gICAgICAgICAgICAnc2hhcmVyJywgJ3Rvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD0nICsgZGF0YS5wb3B1cFdpZHRoICsgJyxoZWlnaHQ9JyArIGRhdGEucG9wdXBIZWlnaHRcbiAgICAgICAgICApO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLmdvb2dsZVBsdXNTaGFyZSA9IGZ1bmN0aW9uIG1hbmFnZUdvb2dsZVBsdXNTaGFyZSAoZGF0YSkge1xuXG4gICAgICAgICAgJHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgJy8vcGx1cy5nb29nbGUuY29tL3NoYXJlP3VybD0nICsgZW5jb2RlVVJJKGRhdGEudXJsKVxuICAgICAgICAgICAgLCdzaGFyZXInLCAndG9vbGJhcj0wLHN0YXR1cz0wLHdpZHRoPScgKyBkYXRhLnBvcHVwV2lkdGggKyAnLGhlaWdodD0nICsgZGF0YS5wb3B1cEhlaWdodCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnJlZGRpdFNoYXJlID0gZnVuY3Rpb24gbWFuYWdlUmVkZGl0U2hhcmUgKGRhdGEpIHtcblxuICAgICAgICAgICR3aW5kb3cub3BlbihcbiAgICAgICAgICAgICcvL3d3dy5yZWRkaXQuY29tL3N1Ym1pdD91cmw9JyArIGVuY29kZVVSSShkYXRhLnVybCkgKyAnJnRpdGxlPScgKyBlbmNvZGVVUkkoZGF0YS50ZXh0KVxuICAgICAgICAgICAgLCdzaGFyZXInLCAndG9vbGJhcj0wLHN0YXR1cz0wLHdpZHRoPScgKyBkYXRhLnBvcHVwV2lkdGggKyAnLGhlaWdodD0nICsgZGF0YS5wb3B1cEhlaWdodCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnN0dW1ibGV1cG9uU2hhcmUgPSBmdW5jdGlvbiBtYW5hZ2VTdHVtYmxldXBvblNoYXJlIChkYXRhKSB7XG5cbiAgICAgICAgICAkd2luZG93Lm9wZW4oXG4gICAgICAgICAgICAnLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9JyArIGVuY29kZVVSSShkYXRhLnVybCkgKyAnJnRpdGxlPScgKyBlbmNvZGVVUkkoZGF0YS50ZXh0KVxuICAgICAgICAgICAgLCdzaGFyZXInLCAndG9vbGJhcj0wLHN0YXR1cz0wLHdpZHRoPScgKyBkYXRhLnBvcHVwV2lkdGggKyAnLGhlaWdodD0nICsgZGF0YS5wb3B1cEhlaWdodCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLmxpbmtlZGluU2hhcmUgPSBmdW5jdGlvbiBtYW5hZ2VMaW5rZWRpblNoYXJlIChkYXRhKSB7XG5cbiAgICAgICAgICAkd2luZG93Lm9wZW4oXG4gICAgICAgICAgICAnLy93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPScgKyBlbmNvZGVVUkkoZGF0YS51cmwpICsgJyZ0aXRsZT0nICsgZW5jb2RlVVJJKGRhdGEudGV4dClcbiAgICAgICAgICAgICwnc2hhcmVyJywgJ3Rvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD0nICsgZGF0YS5wb3B1cFdpZHRoICsgJyxoZWlnaHQ9JyArIGRhdGEucG9wdXBIZWlnaHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5waW50ZXJlc3RTaGFyZSA9IGZ1bmN0aW9uIG1hbmFnZVBpbnRlcmVzdFNoYXJlIChkYXRhKSB7XG5cbiAgICAgICAgICAkd2luZG93Lm9wZW4oXG4gICAgICAgICAgICAnLy93d3cucGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/dXJsPScgKyBlbmNvZGVVUkkoZGF0YS51cmwpICsgJyZtZWRpYT0nICsgZW5jb2RlVVJJKGRhdGEubWVkaWEpICsgJyZkZXNjcmlwdGlvbj0nICsgZW5jb2RlVVJJKGRhdGEudGV4dClcbiAgICAgICAgICAgICwnc2hhcmVyJywgJ3Rvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD0nICsgZGF0YS5wb3B1cFdpZHRoICsgJyxoZWlnaHQ9JyArIGRhdGEucG9wdXBIZWlnaHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5kaWdnU2hhcmUgPSBmdW5jdGlvbiBtYW5hZ2VEaWdnU2hhcmUgKGRhdGEpIHtcblxuICAgICAgICAgICR3aW5kb3cub3BlbihcbiAgICAgICAgICAgICcvL3d3dy5kaWdnLmNvbS9zdWJtaXQ/dXJsPScgKyBlbmNvZGVVUkkoZGF0YS51cmwpICsgJyZ0aXRsZT0nICsgZW5jb2RlVVJJKGRhdGEudGV4dClcbiAgICAgICAgICAgICwnc2hhcmVyJywgJ3Rvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD0nICsgZGF0YS5wb3B1cFdpZHRoICsgJyxoZWlnaHQ9JyArIGRhdGEucG9wdXBIZWlnaHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS50dW1ibHJTaGFyZSA9IGZ1bmN0aW9uIG1hbmFnZVR1bWJsclNoYXJlIChkYXRhKSB7XG4gICAgICAgICAgLy90dW1ibHIgZG9lc250IGxpa2VzIGh0dHA6Ly8gb3IgaHR0cHM6Ly8gYWN0dWFsbHkgaXRzIGEgbWlzdGVyeVxuICAgICAgICAgICR3aW5kb3cub3BlbihcbiAgICAgICAgICAgICcvL3d3dy50dW1ibHIuY29tL3NoYXJlL2xpbms/dXJsPScgKyBlbmNvZGVVUkkoZGF0YS51cmwucmVwbGFjZSgnaHR0cDovLycsICcnKS5yZXBsYWNlKCdodHRwczovLycpKSArICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSShkYXRhLnRleHQpXG4gICAgICAgICAgICAsJ3NoYXJlcicsICd0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9JyArIGRhdGEucG9wdXBXaWR0aCArICcsaGVpZ2h0PScgKyBkYXRhLnBvcHVwSGVpZ2h0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUudmtTaGFyZSA9IGZ1bmN0aW9uIG1hbmFnZVZrU2hhcmUgKGRhdGEpIHtcblxuICAgICAgICAgJHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgJy8vd3d3LnZrLmNvbS9zaGFyZS5waHA/dXJsPScgKyBlbmNvZGVVUkkoZGF0YS51cmwpXG4gICAgICAgICAgICAsJ3NoYXJlcicsICd0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9JyArIGRhdGEucG9wdXBXaWR0aCArICcsaGVpZ2h0PScgKyBkYXRhLnBvcHVwSGVpZ2h0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuZGVsaWNpb3VzU2hhcmUgPSBmdW5jdGlvbiBtYW5hZ2VEZWxpY2lvdXNTaGFyZSAoZGF0YSkge1xuXG4gICAgICAgICAgJHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgJy8vd3d3LmRlbGljaW91cy5jb20vc2F2ZT92PTUmbm91aSZqdW1wPWNsb3NlJnVybD0nICsgZW5jb2RlVVJJKGRhdGEudXJsKSArICcmdGl0bGU9JyArIGVuY29kZVVSSShkYXRhLnRleHQpXG4gICAgICAgICAgICAsJ3NoYXJlcicsICd0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9JyArIGRhdGEucG9wdXBXaWR0aCArICcsaGVpZ2h0PScgKyBkYXRhLnBvcHVwSGVpZ2h0KTtcbiAgICAgICAgfTtcblxuICAgICAgICBlbGVtZW50LmJpbmQocHJvcGVydGllcy5ldmVudFRyaWdnZXIsIGZ1bmN0aW9uIG9uRXZlbnRUcmlnZ2VyZWQoKSB7XG5cbiAgICAgICAgICBzd2l0Y2ggKHByb3BlcnRpZXMucHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGNhc2UgJ2ZhY2Vib29rJzpcblxuICAgICAgICAgICAgICAkc2NvcGUuZmFjZWJvb2tTaGFyZShwcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2dvb2dsZSsnOlxuXG4gICAgICAgICAgICAgICRzY29wZS5nb29nbGVQbHVzU2hhcmUocHJvcGVydGllcyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd0d2l0dGVyJzpcblxuICAgICAgICAgICAgICAkc2NvcGUudHdpdHRlclNoYXJlKHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnc3R1bWJsZXVwb24nOlxuXG4gICAgICAgICAgICAgICRzY29wZS5zdHVtYmxldXBvblNoYXJlKHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncmVkZGl0JzpcblxuICAgICAgICAgICAgICAkc2NvcGUucmVkZGl0U2hhcmUocHJvcGVydGllcyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdwaW50ZXJlc3QnOlxuXG4gICAgICAgICAgICAgICRzY29wZS5waW50ZXJlc3RTaGFyZShwcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2xpbmtlZGluJzpcblxuICAgICAgICAgICAgICAkc2NvcGUubGlua2VkaW5TaGFyZShwcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2RpZ2cnOlxuXG4gICAgICAgICAgICAgICRzY29wZS5kaWdnU2hhcmUocHJvcGVydGllcyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd0dW1ibHInOlxuXG4gICAgICAgICAgICAgICRzY29wZS50dW1ibHJTaGFyZShwcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2RlbGljaW91cyc6XG5cbiAgICAgICAgICAgICAgJHNjb3BlLmRlbGljaW91c1NoYXJlKHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndmsnOlxuXG4gICAgICAgICAgICAgICRzY29wZS52a1NoYXJlKHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbn1dKTtcblxuIl19
