(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('delacourApp', [
  'ngCookies',
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
      // $locationProvider.html5Mode(true);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2lwL3NpdGVzL2xhYi9mcm9udGVuZC13b3JrZmxvdy9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFyaW9pcC9zaXRlcy9sYWIvZnJvbnRlbmQtd29ya2Zsb3cvc3JjL2pzL2Zha2VfYWI3ODgyYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnLCBbXG4gICduZ0Nvb2tpZXMnLFxuICAnbmdTYW5pdGl6ZScsXG4gICduZ1JvdXRlJ1xuXSlcbiAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgJyRsb2NhdGlvblByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG5cbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgLndoZW4oJy8nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvaG9tZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0hvbWVDdHJsJyxcbiAgICAgICAgdGl0bGU6J1N3aXNzIEx1eHVyeSBXYXRjaGVzJ1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvaGlzdG9yeScsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9oaXN0b3J5Lmh0bWwnLFxuICAgICAgICB0aXRsZTonZGVMYUNvdXIgSGlzdG9yeSdcbiAgICAgIH0pXG4gICAgICAud2hlbignL2Fib3V0Jywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2Fib3V0Lmh0bWwnLFxuICAgICAgICB0aXRsZTonQWJvdXQgZGVMYUNvdXInXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9waGlsb3NvcGh5Jywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BoaWxvc29waHkuaHRtbCcsXG4gICAgICAgIHRpdGxlOidQaGlsb3NvcGh5IGRlTGFDb3VyJ1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvc3RvcmUtbG9jYXRvcicsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9zdG9yZS1sb2NhdG9yLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnU3RvcmVMb2NhdG9yQ3RybCcsXG4gICAgICAgIHRpdGxlOidTdG9yZSBMb2NhdG9yJ1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvY29udGFjdCcsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb250YWN0Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQ29udGFjdEN0cmwnLFxuICAgICAgICB0aXRsZTonZGVMYUNvdXIgQ29udGFjdCdcbiAgICAgIH0pXG4gICAgICAvLy0tLS0gUFJFU1MgLS0tLS0vL1xuICAgICAgLndoZW4oJy9lZGl0b3JpYWwnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZWRpdG9yaWFsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnRWRpdG9yaWFsQ3RybCcsXG4gICAgICAgIHRpdGxlOidFZGl0b3JpYWwnXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9lZGl0b3JpYWwvOnllYXInLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZWRpdG9yaWFsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnRWRpdG9yaWFsQ3RybCcsXG4gICAgICAgIHRpdGxlOidFZGl0b3JpYWwnXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9lZGl0b3JpYWwvOnllYXIvOmNvdW50cnknLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZWRpdG9yaWFsLmh0bWwnLCBcbiAgICAgICAgY29udHJvbGxlcjogJ0VkaXRvcmlhbEN0cmwnLFxuICAgICAgICB0aXRsZTonRWRpdG9yaWFsJyBcbiAgICAgIH0pXG4gICAgICAud2hlbignL2VkaXRvcmlhbC86eWVhci86Y291bnRyeS86Y2xpcCcsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9lZGl0b3JpYWwuaHRtbCcsIFxuICAgICAgICBjb250cm9sbGVyOiAnRWRpdG9yaWFsQ3RybCcsXG4gICAgICAgIHRpdGxlOidFZGl0b3JpYWwnIFxuICAgICAgfSlcbiAgICAgIC53aGVuKCcvcHJlc3MnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcHJlc3MuaHRtbCcsXG4gICAgICAgIHRpdGxlOidQcmVzcyBab25lJ1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvcHJlc3MvcHJlc3MtcmVsZWFzZS1jb2xsZWN0aW9uJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3ByZXNzL3ByZXNzLXJlbGVhc2UtY29sbGVjdGlvbi5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1ByZXNzQ3RybCcsXG4gICAgICAgIHRpdGxlOidQcmVzcyBSZWxlYXNlIENvbGxlY3Rpb24nXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9wcmVzcy9wcmVzcy1yZWxlYXNlLW5ld3MnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcHJlc3MvcHJlc3MtcmVsZWFzZS1uZXdzLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUHJlc3NDdHJsJyxcbiAgICAgICAgdGl0bGU6J1ByZXNzIFJlbGVhc2UgTmV3cydcbiAgICAgIH0pXG4gICAgICAud2hlbignL3ByZXNzL2FkdmVydGlzaW5nLWNhbXBhaWduJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3ByZXNzL2NhbXBhaWduLWFkdmVydGlzaW5nLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUHJlc3NDdHJsJyxcbiAgICAgICAgdGl0bGU6J0NhbXBhaWduIEFkdmVydGlzaW5nJ1xuICAgICAgfSlcbiAgICAgIC8vLS0tLSBDT0xMRUNUSU9OUyAtLS0tLS8vXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29sbGVjdGlvbi5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0NvbGxlY3Rpb25DdHJsJyxcbiAgICAgICAgdGl0bGU6J2RlTGFDb3VyIENvbGxlY3Rpb24nXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9jb2xsZWN0aW9uL2JpdG91cmJpbGxvbicsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb2xsZWN0aW9ucy9iaXRvdXJiaWxsb24uaHRtbCcsXG4gICAgICAgIHRpdGxlOidUaGUgQml0b3VyYmlsbG9uJ1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvY29sbGVjdGlvbi9iaXJlcGV0aXRpb24nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29sbGVjdGlvbnMvYmlyZXBldGl0aW9uLmh0bWwnLFxuICAgICAgICB0aXRsZTonVGhlIEJpcmVwZXRpdGlvbidcbiAgICAgICB9KVxuICAgICAgLndoZW4oJy9jb2xsZWN0aW9uL3RyaXBsZXpvbmUnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29sbGVjdGlvbnMvY2l0eS10cmlwbGV6b25lLmh0bWwnLFxuICAgICAgICB0aXRsZTonVGhlIFRyaXBsZXpvbmUnXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9jb2xsZWN0aW9uL21vbm90b3VyYmlsbG9uJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbGxlY3Rpb25zL3NhcXJhLW1vbm90b3VyYmlsbG9uLmh0bWwnLFxuICAgICAgICB0aXRsZTonVGhlIE1vbm90b3VyYmlsbG9uJ1xuICAgICAgfSlcbiAgICAgIC8vIEJpY2hyb25vXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vYmljaHJvbm8nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29sbGVjdGlvbnMvYmljaHJvbm8uaHRtbCcsXG4gICAgICAgIHRpdGxlOidUaGUgQmljaHJvbm8gQ29sbGVjdGlvbidcbiAgICAgIH0pXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vYmljaHJvbm8vYmljaHJvbm8tc2FnYScsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb2xsZWN0aW9ucy9iaWNocm9uby1zYWdhLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQmljaHJvbm9TYWdhQ3RybCcsXG4gICAgICAgIHRpdGxlOidUaGUgQmljaHJvbm8gU2FnYSdcbiAgICAgIH0pXG4gICAgICAvLyBDaXR5XG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vY2l0eScsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb2xsZWN0aW9ucy9jaXR5Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOidDaXR5Q3RybCcsXG4gICAgICAgIHRpdGxlOidUaGUgQ2l0eSBDb2xsZWN0aW9uJ1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvY29sbGVjdGlvbi9jaXR5L2N1c3RvbWl6ZS1lcGlzb2RlJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbGxlY3Rpb25zL2NpdHktZXBpc29kZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0N1c3RvbWl6ZVdhdGNoQ3RybCcsXG4gICAgICAgIHRpdGxlOidUaGUgQ2l0eSBFZ28gRXBpc29kZSdcbiAgICAgIH0pXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vY2l0eS9zdW4tYW5kLWxvdmUnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29sbGVjdGlvbnMvY2l0eS1zdW4tYW5kLWxvdmUuaHRtbCcsXG4gICAgICAgIHRpdGxlOidUaGUgQ2l0eSBTdW4gYW5kIExvdmUnXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9jb2xsZWN0aW9uL2NpdHkvOm1vZGVsbycsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb2xsZWN0aW9ucy9jaXR5LWVnby5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0NpdHlDdHJsJyxcbiAgICAgICAgdGl0bGU6J1RoZSBDaXR5IEVnbydcbiAgICAgIH0pXG4gICAgICAvLyBMZWFwXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vbGVhcCcsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb2xsZWN0aW9ucy9sZWFwLmh0bWwnLFxuICAgICAgICB0aXRsZTonVGhlIExlYXAgQ29sbGVjdGlvbidcbiAgICAgIH0pXG4gICAgICAvL2NvbiBjb2xsZWN0aW9uXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vbGVhcC9wYXNzaW9uJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbGxlY3Rpb25zL2xlYXAtcGFzc2lvbi5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0N1c3RvbWl6ZVdhdGNoQ3RybCcsXG4gICAgICAgIHRpdGxlOidUaGUgTGVhcCBQYXNzaW9uJ1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvY29sbGVjdGlvbi9sZWFwL2JhZ3VldHRlJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbGxlY3Rpb25zL2xlYXAtYmFndWV0dGUuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdDdXN0b21pemVXYXRjaEN0cmwnLFxuICAgICAgICB0aXRsZTonVGhlIExlYXAgQmFndWV0dGUnXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9jb2xsZWN0aW9uL2xlYXAvc25vdycsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb2xsZWN0aW9ucy9sZWFwLXNub3cuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdDdXN0b21pemVXYXRjaEN0cmwnLFxuICAgICAgICB0aXRsZTonVGhlIExlYXAgU25vdydcbiAgICAgIH0pXG4gICAgICAvLyBTYXFyYVxuICAgICAgLndoZW4oJy9jb2xsZWN0aW9uL3NhcXJhJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbGxlY3Rpb25zL3NhcXJhLmh0bWwnLFxuICAgICAgICB0aXRsZTonVGhlIFNhcXJhIENvbGxlY3Rpb24nXG4gICAgICB9KVxuICAgICAgLy8gUmVmbGVjdFxuICAgICAgLndoZW4oJy9jb2xsZWN0aW9uL3JlZmxlY3QnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29sbGVjdGlvbnMvcmVmbGVjdC5odG1sJyxcbiAgICAgICAgdGl0bGU6J1RoZSBSZWZsZWN0IENvbGxlY3Rpb24nXG4gICAgICB9KVxuICAgICAgLy8gUHJvbWVzc1xuICAgICAgLndoZW4oJy9jb2xsZWN0aW9uL3Byb21lc3MnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY29sbGVjdGlvbnMvcHJvbWVzcy5odG1sJyxcbiAgICAgICAgdGl0bGU6J1RoZSBQcm9tZXNzIENvbGxlY3Rpb24nXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9jb2xsZWN0aW9uL3Byb21lc3MvZ2xhbW91cicsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jb2xsZWN0aW9ucy9wcm9tZXNzLWdsYW1vdXIuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdDdXN0b21pemVXYXRjaEN0cmwnLFxuICAgICAgICB0aXRsZTonVGhlIFByb21lc3MgR2xhbW91cidcbiAgICAgIH0pXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vcHJvbWVzcy9yZWVmLXNhdmVyJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbGxlY3Rpb25zL3Byb21lc3MtcmVlZi1zYXZlci5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlZWZTYXZlckN0cmwnLFxuICAgICAgICB0aXRsZTonVGhlIFByb21lc3MgUmVlZiBTYXZlcidcbiAgICAgIH0pXG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vcHJvbWVzcy92aXRyYWlsJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NvbGxlY3Rpb25zL3Byb21lc3Mtdml0cmFpbC5odG1sJyxcbiAgICAgICAgdGl0bGU6J1RoZSBQcm9tZXNzIFZpdHJhaWwnXG4gICAgICB9KVxuICAgICAgLy8gU3BlY2lhbHRpZXNcbiAgICAgIC53aGVuKCcvc3BlY2lhbHRpZXMnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3Mvc3BlY2lhbHRpZXMuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdTcGVjaWFsdGllc0N0cmwnLFxuICAgICAgICB0aXRsZTonZGVMYUNvdXIgU3BlY2lhbHRpZXMnXG4gICAgICB9KVxuICAgICAgLy8gZGVMYUNvdXIgQ29sbGVjdGlvbiAyMDE1XG4gICAgICAud2hlbignL2NvbGxlY3Rpb24vY2F0YWxvZ3VlJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NhdGFsb2d1ZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1dhdGNoZXNDdHJsJyxcbiAgICAgICAgdGl0bGU6J2RlTGFDb3VyIENvbGxlY3Rpb24nXG4gICAgICB9KVxuICAgICAgLy8gZGVMYUNvdXIgQ29sbGVjdGlvbiB3YXRjaCBzZWxlY3RlZFxuICAgICAgLndoZW4oJy9jb2xsZWN0aW9uL2NhdGFsb2d1ZS86Y29sbGVjdGlvbicsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9jYXRhbG9ndWUuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdXYXRjaGVzQ3RybCcsXG4gICAgICAgIHRpdGxlOidkZUxhQ291ciBDb2xsZWN0aW9uJ1xuICAgICAgfSlcbiAgICAgIC8vIGRlTGFDb3VyIENvbGxlY3Rpb24gd2F0Y2ggc2VsZWN0ZWRcbiAgICAgIC53aGVuKCcvY29sbGVjdGlvbi9jYXRhbG9ndWUvOmNvbGxlY3Rpb24vOnJlZicsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy93YXRjaC1kZXRhaWwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdXYXRjaGVzQ3RybCcsXG4gICAgICAgIHRpdGxlOidkZUxhQ291ciBDb2xsZWN0aW9uJ1xuICAgICAgfSlcbiAgICAgIC8vIGVycm9yXG4gICAgICAub3RoZXJ3aXNlKHtcbiAgICAgICAgcmVkaXJlY3RUbzogJ25vdC1mb3VuZCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3Mvbm90LWZvdW5kLmh0bWwnLFxuICAgICAgICB0aXRsZTonTm90IGZvdW5kJ1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHVzZSB0aGUgSFRNTDUgSGlzdG9yeSBBUElcbiAgICAgIC8vICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcblxuICB9XSlcbiAgLnJ1bihmdW5jdGlvbigkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRyb3V0ZSl7XG5cbiAgICAvLyBGYWNlYm9vayBJRFxuICAgICRyb290U2NvcGUuZmFjZWJvb2tBcHBJZCA9ICcxNDE2ODU2MTQxOTQ3NzU3JztcblxuICBcdCRyb290U2NvcGUuJG9uKCckdmlld0NvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG5cbiAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCRsb2NhdGlvbi5wYXRoKCk9PT0nLycpe1xuICAgICAgICAgIGlmKCQod2luZG93KS53aWR0aCgpPDEwMjUpe1xuICAgICAgICAgICAgJCgnI21lbnUgLnJpZ2h0JykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgJCgnI21lbnUgLnJpZ2h0JykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICQoJyNtZW51IC5yaWdodCcpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBwYXJhIHF1ZSBnb29nbGUgYW5hbHl0aWNzIGNvamEgZWwgcm9vdFxuICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCAkbG9jYXRpb24ucGF0aCgpKTtcblxuICAgICAgJChkb2N1bWVudCkuZm91bmRhdGlvbignb3JiaXQnLCB7XG4gICAgICAgIGFuaW1hdGlvbjogJ3NsaWRlJyxcbiAgICAgICAgbmV4dF9vbl9jbGljazogZmFsc2UsXG4gICAgICAgIHBhdXNlX29uX2NsaWNrOiBmYWxzZSxcbiAgICAgICAgdGltZXJfc3BlZWQ6IDUwMDAsXG4gICAgICAgIHBhdXNlX29uX2hvdmVyOiBmYWxzZSxcbiAgICAgICAgcmVzdW1lX29uX21vdXNlb3V0OiB0cnVlLFxuICAgICAgICB0aW1lcjogdHJ1ZSxcbiAgICAgICAgc2xpZGVfbnVtYmVyOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICAgICAgICQoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTtcbiAgICAgIH0sIDUwMCk7XG5cbiAgICB9KTtcblxuICAgICRyb290U2NvcGUuJG9uKCckcm91dGVDaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24oY3VycmVudFJvdXRlLCBwcmV2aW91c1JvdXRlKXtcblxuICAgICAgLy8gY2hhbmdpbmcgdGhlIG1haW4gc3R5bGUgZGVwZW5kaW5nIHRoZSBzZWN0aW9uICguZGxjLXdoaXRlLCAuZGxjLWJsYWNrKVxuICAgICAgdmFyIHVybEZpcnN0U3RlcCA9ICRsb2NhdGlvbi51cmwoKTtcbiAgICAgIHVybEZpcnN0U3RlcCA9IHVybEZpcnN0U3RlcC5zcGxpdCgnLycpO1xuXG4gICAgICBpZih1cmxGaXJzdFN0ZXBbMl09PT0nY2F0YWxvZ3VlJyl7XG4gICAgICAgICRyb290U2NvcGUuZGxjV2hpdGUgPSB0cnVlO1xuICAgICAgICAkcm9vdFNjb3BlLmRsY0JsYWNrID0gZmFsc2U7XG4gICAgICAgICRyb290U2NvcGUubG9nb1doaXRlID0gZmFsc2U7XG4gICAgICAgICRyb290U2NvcGUubG9nb0JsYWNrID0gdHJ1ZTtcbiAgICAgIH1lbHNle1xuICAgICAgICAkcm9vdFNjb3BlLmRsY1doaXRlID0gZmFsc2U7XG4gICAgICAgICRyb290U2NvcGUuZGxjQmxhY2sgPSB0cnVlO1xuICAgICAgICAkcm9vdFNjb3BlLmxvZ29XaGl0ZSA9IHRydWU7XG4gICAgICAgICRyb290U2NvcGUubG9nb0JsYWNrID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vQ2hhbmdlIHBhZ2UgdGl0bGUsIGJhc2VkIG9uIFJvdXRlIGluZm9ybWF0aW9uXG4gICAgICAkcm9vdFNjb3BlLnRpdGxlID0gJHJvdXRlLmN1cnJlbnQudGl0bGU7XG4gICAgfSk7XG5cbiAgfSk7XG4ndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5jb250cm9sbGVyKCdNYWluQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbikge1xuXG4gICAgJHNjb3BlLnVybCA9ICRsb2NhdGlvbi5hYnNVcmwoKTtcblxuICAgICRzY29wZS5vblBvZGl1bUxvdW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAkd2luZG93LmdhKCdwdXNoJywgWydfdHJhY2tFdmVudCcsICdiYW5uZXJzJywgJ29uUG9kaXVtTG91bmdlJ10pO1xuICAgIH1cblxuICAgIC8vIHBhcmEgdmlzdWFsaXphciBlbCBsb2dvIHNpbHZlciBlbiBsYSBob21lXG4gICAgJHNjb3BlLmlzSG9tZSA9IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgaG9tZSA9IHRydWU7XG4gICAgICBpZigkbG9jYXRpb24udXJsKCkhPScvJykgaG9tZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGhvbWU7XG4gICAgfVxuXG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmNvbnRyb2xsZXIoJ0hvbWVDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgSG9tZSkge1xuXG4gICAgLy8gbGF0ZXN0IG5ld3Mgd29yZHByZXNzXG4gICAgSG9tZS5nZXRMYXRlc3ROZXdzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAkc2NvcGUubGF0ZXN0TmV3cyA9IGRhdGE7XG4gICAgfSk7XG5cbn0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuY29udHJvbGxlcignQ29udGFjdEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBDb250YWN0LCAkbG9jYXRpb24pIHtcblxuICAgIHZhciBtYXN0ZXIgPSB7fTtcblxuICAgIC8vIENvdW50cmllc1xuICAgIENvbnRhY3QuZ2V0Q291bnRyaWVzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAkc2NvcGUuY291bnRyaWVzID0gZGF0YTtcbiAgICB9KTtcblxuICAgIC8vIFR5cGUgcmVxdWVzdFxuICAgIENvbnRhY3QuZ2V0VHlwZVJlcXVlc3QoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICRzY29wZS50eXBlcyA9IGRhdGE7XG4gICAgfSk7IFxuXG4gICAgLy8gRmluZCB1c1xuICAgIENvbnRhY3QuZ2V0RmluZFVzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAkc2NvcGUuZmluZHMgPSBkYXRhO1xuICAgIH0pO1xuXG4gICAgJHNjb3BlLm5ld3NsZXR0ZXIgPSB0cnVlO1xuXG4gICAgLy8gY29tcG9ydGFtaWVudG9cbiAgICAkc2NvcGUub25TZW5kID0gZnVuY3Rpb24odmFsaWQpe1xuICAgICAgaWYodmFsaWQpe1xuICAgICAgICBDb250YWN0LnNldEZvcm0oJHNjb3BlKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBpZihkYXRhWzBdLkNvZF9lcnJvcj09MCl7XG4gICAgICAgICAgICAkc2NvcGUubXNnID0gXCJUaGFuayB5b3UgZm9yIHlvdXIgdGltZSwgd2UgZW5kZWF2b3VyIHRvIHJlc3BvbmQgdG8gYWxsIHF1ZXJpZXMgYXMgc29vbiBhcyBwb3NzaWJsZS5cIjtcbiAgICAgICAgICAgICQoJyNjb250YWN0LW1vZGFsLXN1Y2Nlc3MnKS5mb3VuZGF0aW9uKCdyZXZlYWwnLCAnb3BlbicpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgJHNjb3BlLm1zZyA9IFwiV2UgYXBvbG9naXplIGZvciB0aGlzIGluY29udmVuaWVuY2UsIGJ1dCBhbiBlcnJvciBoYXMgYmVlbiBkZXRlY3RlZC5cXG4gUGxlYXNlLCB0cnkgYWdhaW4gb3Igc2VuZCB1cyBhIGVtYWlsIHRvOiB3ZWJtYXN0ZXJAZGVsYWNvdXIuY2hcIjtcbiAgICAgICAgICAgICQoJyNjb250YWN0LW1vZGFsLWFsZXJ0JykuZm91bmRhdGlvbigncmV2ZWFsJywgJ29wZW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfWVsc2V7XG4gICAgICAgICRzY29wZS5tc2cgPSAnUGxlYXNlLCBjaGVjayB0aGUgcmVxdWlyZWQgZmllbGRzLic7XG4gICAgICAgICQoJyNjb250YWN0LW1vZGFsLWFsZXJ0JykuZm91bmRhdGlvbigncmV2ZWFsJywgJ29wZW4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb21wb3J0YW1pZW50byBzaSBjaWVycmFuIGxhIHZlbnRhbmEgbW9kYWxcbiAgICAkc2NvcGUub25DbG9zZU1vZGFsID0gZnVuY3Rpb24oKXtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG5cbn0pO1xuXG4vKioqKioqIEdPT0dMRSBNQVBTICoqKioqKioqL1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuY29udHJvbGxlcignU3RvcmVMb2NhdG9yQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgXHQkLmdldFNjcmlwdChcImpzL3N0b3JlLWxvY2F0b3Ivc3RvcmUtbG9jYXRvci5qc1wiKVxuXHQgIC5kb25lKGZ1bmN0aW9uKCBzY3JpcHQsIHRleHRTdGF0dXMgKSB7XG5cdCAgICBcblx0ICB9KVxuXHQgIC5mYWlsKGZ1bmN0aW9uKCBqcXhociwgc2V0dGluZ3MsIGV4Y2VwdGlvbiApIHtcblx0ICAgIGNvbnNvbGUubG9nKCBcImVycm9yOlwiK2V4Y2VwdGlvbiApO1xuXHR9KTtcbn0pO1xuXG5mdW5jdGlvbiBzaG93VmlkZW8oKXtcblx0JChcIi5pbWFnZS12aWRlb1wiKS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xuXHQkKFwiI3ZpZGVvXCIpLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xufVxuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuY29udHJvbGxlcignQ29sbGVjdGlvbkN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgY29uc29sZS5sb2coXCJkZW50cm8gY29sbGVjdGlvblwiKTtcbn0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuY29udHJvbGxlcignV2F0Y2hlc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBXYXRjaGVzLCAkbG9jYXRpb24sICRyb3V0ZVBhcmFtcykge1xuXG4gICAgLy8gZ2V0IHNjb3BlIGZhbWlseSBvIGFsbFxuICAgICRzY29wZS5mYW1pbHkgPSAkcm91dGVQYXJhbXMuY29sbGVjdGlvbjtcbiAgICBpZigkc2NvcGUuZmFtaWx5PT11bmRlZmluZWQpICRzY29wZS5mYW1pbHk9J2FsbCc7XG5cbiAgICB2YXIgcmVmID0gJGxvY2F0aW9uLnVybCgpLnNwbGl0KFwiL1wiKTtcbiAgICByZWYgPSByZWZbcmVmLmxlbmd0aC0xXTtcblxuICAgIC8vIHdhdGNoZXNcbiAgICBXYXRjaGVzLmdldFdhdGNoZXMoJHNjb3BlLmZhbWlseSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAkc2NvcGUud2F0Y2hlcyA9IGRhdGE7XG5cbiAgICAgIC8vIGdldCB0aGUgZmFtaWxpZXMgb2YgdGhlIHNlbGVjdGlvblxuICAgICAgJHNjb3BlLmZhbWlsaWVzID0gW107XG4gICAgICBhbmd1bGFyLmZvckVhY2goZGF0YSwgZnVuY3Rpb24odjEpe1xuICAgICAgICB2YXIgaW5zaWRlID0gZmFsc2U7XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUuZmFtaWxpZXMsZnVuY3Rpb24odjIpe1xuICAgICAgICAgIGlmKHYxLmZhbWlseU5hbWU9PXYyKXtcbiAgICAgICAgICAgIGluc2lkZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYoIWluc2lkZSAmJiB2MS5mYW1pbHlOYW1lIT0nc3BlY2lhbHRpbWVwaWVjZXMnKSAkc2NvcGUuZmFtaWxpZXMucHVzaCh2MS5mYW1pbHlOYW1lKTtcblxuICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgICRzY29wZS5zaG93X3Bvd2VyX3Jlc2VydmUgPSB0cnVlO1xuXG4gICAgLy8gZ2V0IHdhdGNoIGRldGFpbFxuICAgIFdhdGNoZXMuZ2V0V2F0Y2hEZXRhaWwocmVmKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgICAgJHNjb3BlLndhdGNoRGV0YWlsID0gZGF0YTtcblxuICAgICAgLy8gZXhjZXBjaW9uZXMgZW4gbGEgY29ycmVhIChubyB0b2RhIGxhIGNvbGVjY2nDs24gbGxldmEgZWwgbWlzbW8gdGlwbylcbiAgICAgIC8vIGlmKCRzY29wZS53YXRjaERldGFpbC5yZWY9PSdXQVRJMDA5OC0xNDMwJyl7XG4gICAgICAvLyAgICRzY29wZS53YXRjaERldGFpbC5zdHJhcCA9ICdSdWJiZXInO1xuICAgICAgLy8gfVxuXG4gICAgICBpZigkc2NvcGUud2F0Y2hEZXRhaWwuc3RvbmVzPT0nJyl7XG4gICAgICAgICRzY29wZS53YXRjaERldGFpbC5zdG9uZXNTaG93PTA7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgJHNjb3BlLndhdGNoRGV0YWlsLnN0b25lc1Nob3c9MTtcbiAgICAgIH1cblxuICAgICAgV2F0Y2hlcy5nZXRXYXRjaGVzQ29sbGVjdGlvbihkYXRhLmNvbGxlY3Rpb24pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgICAgICRzY29wZS53YXRjaGVzQ29sbGVjdGlvbiA9IGRhdGE7XG5cbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cblxufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5jb250cm9sbGVyKCdDdXN0b21pemVXYXRjaEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgJC5nZXRTY3JpcHQoXCJqcy9jb2xsZWN0aW9ucy9jdXN0b21pemUtd2F0Y2guanNcIilcbiAgICAuZG9uZShmdW5jdGlvbiggc2NyaXB0LCB0ZXh0U3RhdHVzICkge1xuICAgICAgY29uc29sZS5sb2coXCJkZW50cm8gY3VzdG9taXplXCIpO1xuICAgIH0pXG4gICAgLmZhaWwoZnVuY3Rpb24oIGpxeGhyLCBzZXR0aW5ncywgZXhjZXB0aW9uICkge1xuICAgICAgY29uc29sZS5sb2coIFwiZXJyb3I6XCIrZXhjZXB0aW9uICk7XG4gIH0pO1xufSk7XG5cbi8vIHNwZWNpYWx0aWVzXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuY29udHJvbGxlcignU3BlY2lhbHRpZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICQuZ2V0U2NyaXB0KFwianMvY29sbGVjdGlvbnMvc3BlY2lhbHRpZXMuanNcIilcbiAgICAuZG9uZShmdW5jdGlvbiggc2NyaXB0LCB0ZXh0U3RhdHVzICkge1xuICAgICAgY29uc29sZS5sb2coXCJkZW50cm8gc3BlY2lhbHRpZXNcIik7XG4gICAgfSlcbiAgICAuZmFpbChmdW5jdGlvbigganF4aHIsIHNldHRpbmdzLCBleGNlcHRpb24gKSB7XG4gICAgICBjb25zb2xlLmxvZyggXCJlcnJvcjpcIitleGNlcHRpb24gKTtcbiAgfSk7XG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmNvbnRyb2xsZXIoJ1JlZWZTYXZlckN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgJC5nZXRTY3JpcHQoXCJqcy9jb2xsZWN0aW9ucy9yZWVmLXNhdmVyLWRlZXAuanNcIilcbiAgICAuZG9uZShmdW5jdGlvbiggc2NyaXB0LCB0ZXh0U3RhdHVzICkge1xuICAgICAgY29uc29sZS5sb2coXCJkZW50cm8gcmVlZlwiKTtcbiAgICB9KVxuICAgIC5mYWlsKGZ1bmN0aW9uKCBqcXhociwgc2V0dGluZ3MsIGV4Y2VwdGlvbiApIHtcbiAgICAgIGNvbnNvbGUubG9nKCBcImVycm9yZTpcIitleGNlcHRpb24gKTtcbiAgfSk7XG59KTtcblxuIGFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5jb250cm9sbGVyKCdCaWNocm9ub1NhZ2FDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICQuZ2V0U2NyaXB0KCBcImpzL3RpbWVsaW5lanMvc3Rvcnlqcy1lbWJlZC5qc1wiIClcbiAgICAuZG9uZShmdW5jdGlvbiggc2NyaXB0LCB0ZXh0U3RhdHVzICkge1xuICAgICAgJChmdW5jdGlvbigpIHtcbiAgICAgICAgIGNyZWF0ZVN0b3J5SlMoe1xuICAgICAgICAgICAgIHR5cGU6ICAgICAgICd0aW1lbGluZScsXG4gICAgICAgICAgICAgd2lkdGg6ICAgICAgJzEwMCUnLFxuICAgICAgICAgICAgIGhlaWdodDogICAgICc2NTAnLFxuICAgICAgICAgICAgIHNvdXJjZTogICAgICdqc29uL2JpY2hyb25vL2JpY2hyb25vLXRpbWVsaW5lLmpzb24nLFxuICAgICAgICAgICAgIGVtYmVkX2lkOiAgICdiaWNocm9uby1zYWdhJyxcbiAgICAgICAgICAgICBtYXB0eXBlOiAgICAnd2F0ZXJjb2xvcicsIFxuICAgICAgICAgICAgIHN0YXJ0X3pvb21fYWRqdXN0OiAgJzEnLCBcbiAgICAgICAgICAgICBjc3M6ICAgICAgICAnY3NzL3RpbWVsaW5lanMvdGltZWxpbmUuY3NzJywgICAgIC8vT1BUSU9OQUwgUEFUSCBUTyBDU1NcbiAgICAgICAgICAgICBqczogICAgICAgICAnanMvdGltZWxpbmVqcy90aW1lbGluZS1taW4uanMnXG4gICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmZhaWwoZnVuY3Rpb24oIGpxeGhyLCBzZXR0aW5ncywgZXhjZXB0aW9uICkge1xuICAgICAgY29uc29sZS5sb2coIFwiZXJyb3JcIiApO1xuICB9KTtcbn0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuZGlyZWN0aXZlKCdjYXJhY3RlcmUnLCBmdW5jdGlvbiAoJGZpbHRlciwgQ29sbGVjdGlvbnMpIHtcblxuICAgIHJldHVybntcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RpcmVjdGl2ZXMvY2l0eS1lZ28tY2FyYWN0ZXJlLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0NpdHlDdHJsJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlKXtcbiAgICAgICAgLy8gQ2l0eSBDYXJhY3RlcmVcbiAgICAgIENvbGxlY3Rpb25zLmdldENpdHlDYXJhY3RlcmVTbGlkZXIoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgLy8gZmlsdHJhbW9zXG4gICAgICAgIHNjb3BlLnNsaWRlckNpdHlDYXJhY3RlcmUgPSAkZmlsdGVyKCdzbGlkZXJDb250ZW50JykoZGF0YSk7XG4gICAgICB9KTtcbiAgICAgICQoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5kaXJlY3RpdmUoJ2VwaXNvZGUnLCBmdW5jdGlvbiAoJGZpbHRlciwgQ29sbGVjdGlvbnMpIHtcblxuICAgIHJldHVybntcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RpcmVjdGl2ZXMvY2l0eS1lZ28tZXBpc29kZS5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdDaXR5Q3RybCcsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSl7XG4gICAgICAgIC8vIENpdHkgQ2FyYWN0ZXJlXG4gICAgICBDb2xsZWN0aW9ucy5nZXRDaXR5RXBpc29kZVNsaWRlcigpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgICAgIC8vIGZpbHRyYW1vc1xuICAgICAgICBzY29wZS5zbGlkZXJDaXR5RXBpc29kZSA9ICRmaWx0ZXIoJ3NsaWRlckNvbnRlbnQnKShkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgJChkb2N1bWVudCkuZm91bmRhdGlvbigpO1xuICAgICAgfVxuICAgIH1cblxuICB9KTtcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmRpcmVjdGl2ZSgnY2hyb25vNDUnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICByZXR1cm57XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9kaXJlY3RpdmVzL2NpdHktZWdvLWNocm9uby00NS5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdDaXR5Q3RybCcsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSl7XG4gICAgICAgIC8vIENpdHkgQ2hyb25vIDQ1XG4gICAgICBDb2xsZWN0aW9ucy5nZXRDaXR5RXBpc29kZVNsaWRlcigpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAvLyBmaWx0cmFtb3NcbiAgICAgICAgc2NvcGUuc2xpZGVyQ2l0eUVwaXNvZGUgPSAkZmlsdGVyKCdzbGlkZXJDb250ZW50JykoZGF0YSk7XG4gICAgICB9KTtcbiAgICAgICQoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5jb250cm9sbGVyKCdDaXR5Q3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgJHJvdXRlUGFyYW1zLCAkZmlsdGVyLCBDb2xsZWN0aW9ucykge1xuXG4gICAgJHNjb3BlLm1vZGVsbyA9ICRyb3V0ZVBhcmFtcy5tb2RlbG87XG5cbiAgICAkc2NvcGUuaXNBY3RpdmUgPSBmdW5jdGlvbihyb3V0ZSkge1xuICAgICAgICByZXR1cm4gcm91dGUgPT09ICRsb2NhdGlvbi5wYXRoKCk7XG4gICAgfVxuXG4gICAgLy8gQ2l0eVxuICAgIENvbGxlY3Rpb25zLmdldENpdHlTbGlkZXIoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIC8vIGZpbHRyYW1vc1xuICAgICAgJHNjb3BlLnNsaWRlckNpdHkgPSAkZmlsdGVyKCdzbGlkZXJDb250ZW50JykoZGF0YSk7XG4gICAgfSk7XG5cbn0pO1xuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuY29udHJvbGxlcignUHJlc3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgUHJlc3MpIHtcbiAgICBcbiAgICAvLyBQcmVzcyBSZWxlYXNlXG4gICAgUHJlc3MuZ2V0UHJlc3NSZWxlYXNlcygpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgJHNjb3BlLnByZXNzUmVsZWFzZXMgPSBkYXRhO1xuICAgIH0pO1xuXG4gICAgLy8gUHJlc3MgUmVsZWFzZSBOZXdzXG4gICAgUHJlc3MuZ2V0UHJlc3NSZWxlYXNlc05ld3MoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICRzY29wZS5wcmVzc1JlbGVhc2VzTmV3cyA9IGRhdGE7XG4gICAgfSk7XG5cbiAgICAvLyBBZCBWaXN1YWxzXG4gICAgUHJlc3MuZ2V0QWRWaXN1YWxzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAkc2NvcGUuYWRWaXN1YWxzID0gZGF0YTtcbiAgICB9KTtcblxufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5jb250cm9sbGVyKCdFZGl0b3JpYWxDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGZpbHRlciwgJGxvY2F0aW9uLCAkcm91dGVQYXJhbXMsIFByZXNzKSB7XG5cbiAgICAkKCcuYWxlcnQtYm94JykuaGlkZSgpO1xuICAgICQoJyNtb2RhbC1jbGlwcGluZ3MnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG5cbiAgICAkc2NvcGUueWVhciA9ICRyb3V0ZVBhcmFtcy55ZWFyO1xuICAgICRzY29wZS5jb3VudHJ5ID0gJHJvdXRlUGFyYW1zLmNvdW50cnk7XG4gICAgJHNjb3BlLmNsaXAgPSAkcm91dGVQYXJhbXMuY2xpcDtcblxuICAgIGNvbnNvbGUubG9nKFwiaGF5IENsaXA6XCIrJHNjb3BlLmNsaXApO1xuXG4gICAgLy8gRWRpdG9yaWFsXG4gICAgUHJlc3MuZ2V0RWRpdG9yaWFsKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAkc2NvcGUuZWRpdG9yaWFsRnVsbCA9IGRhdGE7XG4gICAgICAkc2NvcGUuZWRpdG9yaWFsID0gJHNjb3BlLmVkaXRvcmlhbEZ1bGw7XG4gICAgICBjb25zb2xlLmxvZygkc2NvcGUuZWRpdG9yaWFsKTtcbiAgICAgIC8vIGZpbHRyYW1vc1xuICAgICAgJHNjb3BlLmVkaXRvcmlhbCA9ICRmaWx0ZXIoJ2VkaXRvcmlhbCcpKCRzY29wZS5lZGl0b3JpYWxGdWxsLCAkcm91dGVQYXJhbXMueWVhciwgJHJvdXRlUGFyYW1zLmNvdW50cnkpO1xuICAgIH0pO1xuXG4gICAgLy8gQ291bnRyaWVzXG4gICAgUHJlc3MuZ2V0Q291bnRyaWVzKCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAkc2NvcGUuY291bnRyaWVzID0gZGF0YTtcbiAgICAgICRzY29wZS5zZWxlY3RlZENvdW50cnkgPSAkcm91dGVQYXJhbXMuY291bnRyeTtcbiAgICB9KTtcblxuICAgIC8vIFllYXJzXG4gICAgUHJlc3MuZ2V0WWVhcnMoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICRzY29wZS55ZWFycyA9IGRhdGE7XG4gICAgfSk7XG5cbiAgICAkc2NvcGUub25DaGFuZ2VDb3VudHJ5ID0gZnVuY3Rpb24oY291bnRyeSl7XG4gICAgICBjb25zb2xlLmxvZyhcImNvdW50cnk6XCIrY291bnRyeSk7XG4gICAgICAkbG9jYXRpb24ucGF0aCgnL2VkaXRvcmlhbC8nKyRzY29wZS55ZWFyKycvJytjb3VudHJ5KTtcbiAgICB9XG5cbiAgICAkc2NvcGUuaXNBY3RpdmUgPSBmdW5jdGlvbih5ZWFyKSB7XG4gICAgICBpZiAoeWVhci5kYXRhID09ICRyb3V0ZVBhcmFtcy55ZWFyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICAkc2NvcGUub25DbGlwID0gZnVuY3Rpb24oaWQpe1xuICAgICAgJHNjb3BlLmNsaXAgPSBOdW1iZXIoaWQpO1xuXG4gICAgICAkc2NvcGUuY2xpcEltYWdlID0gJHNjb3BlLmVkaXRvcmlhbFtpZF0uaW1hZ2U7XG4gICAgICAkc2NvcGUuY2xpcFllYXIgPSAkc2NvcGUuZWRpdG9yaWFsW2lkXS55ZWFyO1xuICAgICAgJHNjb3BlLmNsaXBDYXB0aW9uID0gJHNjb3BlLmVkaXRvcmlhbFtpZF0uY2FwdGlvbjtcbiAgICAgICRzY29wZS5jbGlwTGluayA9ICRzY29wZS5lZGl0b3JpYWxbaWRdLmxpbms7XG4gICAgICAkKCcjbW9kYWwtY2xpcHBpbmdzJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgIC8vICRsb2NhdGlvbi5wYXRoKCcvZWRpdG9yaWFsLycrJHJvdXRlUGFyYW1zLnllYXIrJy8nKyRyb3V0ZVBhcmFtcy5jb3VudHJ5KycvJyskcm91dGVQYXJhbXMuY2xpcCk7XG4gICAgfTtcblxuICAgICRzY29wZS5vblggPSBmdW5jdGlvbigpe1xuICAgICAgJCgnI21vZGFsLWNsaXBwaW5ncycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLm9uUHJldiA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHZhciBwcmV2ID0gaWQtMTtcbiAgICAgIGlmKHByZXY+PTApe1xuICAgICAgICAkc2NvcGUub25DbGlwKHByZXYpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAkc2NvcGUub25OZXh0ID0gZnVuY3Rpb24oaWQpe1xuICAgICAgdmFyIG5leHQgPSBpZCsxO1xuICAgICAgJHNjb3BlLm9uQ2xpcChuZXh0KTtcbiAgICB9O1xuXG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmRpcmVjdGl2ZSgnY2xlYXJpbmcnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZGlyZWN0aXZlcy9lZGl0b3JpYWwtY2xlYXJpbmcuaHRtbCcsXG4gICAgfVxufSk7XG5cbid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmZhY3RvcnkoJ0NvbnRhY3QnLCBmdW5jdGlvbigkaHR0cCwgJHEpIHtcblxuICBcdHZhciBnZXRDb3VudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgICAkaHR0cC5nZXQoJ2pzb24vY29udGFjdC9jb3VudHJpZXMuanNvbicpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdmFyIGdldFR5cGVSZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgJGh0dHAuZ2V0KCdqc29uL2NvbnRhY3QvdHlwZVJlcXVlc3QuanNvbicpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdmFyIGdldEZpbmRVcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICRodHRwLmdldCgnanNvbi9jb250YWN0L2ZpbmRVcy5qc29uJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgc2V0Rm9ybSA9IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICRodHRwLnBvc3QoJ3BocC9jb250YWN0LnBocCcsIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgJ2ZpcnN0TmFtZSc6ICRzY29wZS51c2VyLmZpcnN0TmFtZSwgXG4gICAgICAgICAgICAnbGFzdE5hbWUnOiAkc2NvcGUudXNlci5sYXN0TmFtZSwgXG4gICAgICAgICAgICAnZW1haWwnOiAkc2NvcGUudXNlci5lbWFpbCwgXG4gICAgICAgICAgICAndGVsZXBob25lJzogJHNjb3BlLnVzZXIudGVsZXBob25lLCBcbiAgICAgICAgICAgICdjb3VudHJ5JzogJHNjb3BlLnVzZXIuY291bnRyeSwgXG4gICAgICAgICAgICAnY2l0eSc6ICRzY29wZS51c2VyLmNpdHksIFxuICAgICAgICAgICAgJ3Bvc3RhbENvZGUnOiAkc2NvcGUudXNlci5wb3N0YWxDb2RlLCBcbiAgICAgICAgICAgICd0eXBlUmVxdWVzdCc6ICRzY29wZS51c2VyLnR5cGVSZXF1ZXN0LCBcbiAgICAgICAgICAgICdmaW5kVXMnOiAkc2NvcGUudXNlci5maW5kVXMsIFxuICAgICAgICAgICAgJ2NvbW1lbnRzJzogJHNjb3BlLnVzZXIuY29tbWVudHMsIFxuICAgICAgICAgICAgJ25ld3NsZXR0ZXInOiAkc2NvcGUubmV3c2xldHRlclxuICAgICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEsIHN0YXR1cyl7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJue1xuICAgIFx0Z2V0Q291bnRyaWVzOiBnZXRDb3VudHJpZXMsXG4gICAgICAgIGdldFR5cGVSZXF1ZXN0OiBnZXRUeXBlUmVxdWVzdCxcbiAgICAgICAgZ2V0RmluZFVzOiBnZXRGaW5kVXMsXG4gICAgICAgIHNldEZvcm06IHNldEZvcm1cbiAgICB9O1xuXG59KTtcbid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmZhY3RvcnkoJ1ByZXNzJywgZnVuY3Rpb24oJGh0dHAsICRxKSB7XG5cbiAgXHR2YXIgZ2V0UHJlc3NSZWxlYXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICRodHRwLmdldCgnanNvbi9wcmVzcy9wcmVzcy1yZWxlYXNlLWNvbGxlY3Rpb24uanNvbicpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdmFyIGdldFByZXNzUmVsZWFzZXNOZXdzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgJGh0dHAuZ2V0KCdqc29uL3ByZXNzL3ByZXNzLXJlbGVhc2UtbmV3cy5qc29uJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0QWRWaXN1YWxzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgJGh0dHAuZ2V0KCdqc29uL3ByZXNzL2NhbXBhaWduLWFkdmVydGlzaW5nLmpzb24nKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHZhciBnZXRFZGl0b3JpYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgICAkaHR0cC5nZXQoJ2pzb24vcHJlc3MvZWRpdG9yaWFsLmpzb24nKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGRhdGEsIGZ1bmN0aW9uKHZhbHVlLGtleSl7XG4gICAgICAgICAgICAgICAgdmFyIHllYXIgPSBkYXRhW2tleV0uZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgICAgIHllYXIgPSB5ZWFyWzBdO1xuICAgICAgICAgICAgICAgIGRhdGFba2V5XS55ZWFyID0geWVhcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfVxuXG4gICAgdmFyIGdldENvdW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICRodHRwLmdldCgnanNvbi9wcmVzcy9lZGl0b3JpYWxDb3VudHJpZXMuanNvbicpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdmFyIGdldFllYXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgJGh0dHAuZ2V0KCdqc29uL3ByZXNzL2VkaXRvcmlhbFllYXJzLmpzb24nKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHJldHVybntcbiAgICBcdGdldFByZXNzUmVsZWFzZXM6IGdldFByZXNzUmVsZWFzZXMsXG4gICAgXHRnZXRQcmVzc1JlbGVhc2VzTmV3czogZ2V0UHJlc3NSZWxlYXNlc05ld3MsXG4gICAgXHRnZXRBZFZpc3VhbHM6IGdldEFkVmlzdWFscyxcbiAgICAgICAgZ2V0RWRpdG9yaWFsOiBnZXRFZGl0b3JpYWwsXG4gICAgICAgIGdldENvdW50cmllczogZ2V0Q291bnRyaWVzLFxuICAgICAgICBnZXRZZWFyczogZ2V0WWVhcnNcbiAgICB9XG5cbn0pO1xuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuZmFjdG9yeSgnSG9tZScsIGZ1bmN0aW9uKCRodHRwLCAkcSkge1xuXG4gICAgdmFyIG1lc2VzID0gWydFTkUnLCdGRUInLCdNQVInLCdBQlInLCdNQVknLCdKVU4nLCdKVUwnLCdBR08nLCdTRVAnLCdPQ1QnLCdOT1YnLCdESUMnXTtcblxuICAgLy8gaGFjZW1vcyB1biBnZXQgZGUgbGFzIHVsdGltYXMgbm90aWNpYXMgZGVsIGJsb2cgLSBwbHVnaW4gXG4gICAgdmFyIGdldExhdGVzdE5ld3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgICAkaHR0cC5nZXQoJ2h0dHA6Ly93d3cuZGVsYWNvdXIuY2gvbmV3cy8/anNvbj1nZXRfcG9zdHMmY291bnQ9NScpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG5cbiAgICAgICAgICAgIHZhciBzYWxpZGEgPSBbXTtcblxuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGRhdGEucG9zdHMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcblxuICAgICAgICAgICAgICAgIHZhciBmZWNoYSA9IHZhbHVlLmRhdGU7XG4gICAgICAgICAgICAgICAgZmVjaGEgPSBmZWNoYS5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICAgICAgdmFsdWUubWVzID0gbWVzZXNbZmVjaGFbMV0tMV07XG4gICAgICAgICAgICAgICAgdmFyIGRpYSA9IGZlY2hhWzJdLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5kaWEgPSBkaWFbMF07XG5cbiAgICAgICAgICAgICAgICB0aGlzLnB1c2godmFsdWUpO1xuXG4gICAgICAgICAgICB9LCBzYWxpZGEpO1xuXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHNhbGlkYSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICByZXR1cm57XG4gICAgXHRnZXRMYXRlc3ROZXdzOiBnZXRMYXRlc3ROZXdzXG4gICAgfVxuXG59KTtcbid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmZhY3RvcnkoJ0NvbGxlY3Rpb25zJywgZnVuY3Rpb24oJGh0dHAsICRxKSB7XG5cbiAgXHR2YXIgZ2V0Q2l0eVNsaWRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICRodHRwLmdldCgnanNvbi9jb2xsZWN0aW9ucy9jaXR5L2NpdHkuanNvbicpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdmFyIGdldENpdHlDYXJhY3RlcmVTbGlkZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgICAkaHR0cC5nZXQoJ2pzb24vY29sbGVjdGlvbnMvY2l0eS9jaXR5LWVnby1jYXJhY3RlcmUuanNvbicpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdmFyIGdldENpdHlFcGlzb2RlU2xpZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgJGh0dHAuZ2V0KCdqc29uL2NvbGxlY3Rpb25zL2NpdHkvY2l0eS1lZ28tZXBpc29kZS5qc29uJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICByZXR1cm57XG4gICAgXHRnZXRDaXR5U2xpZGVyOiBnZXRDaXR5U2xpZGVyLFxuICAgICAgICBnZXRDaXR5Q2FyYWN0ZXJlU2xpZGVyOiBnZXRDaXR5Q2FyYWN0ZXJlU2xpZGVyLFxuICAgICAgICBnZXRDaXR5RXBpc29kZVNsaWRlcjogZ2V0Q2l0eUVwaXNvZGVTbGlkZXJcbiAgICB9XG5cbn0pO1xuJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuZmFjdG9yeSgnV2F0Y2hlcycsIGZ1bmN0aW9uKCRodHRwLCAkcSkge1xuXG4gIFx0dmFyIGdldFdhdGNoZXMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICRodHRwLnBvc3QoJ3BocC9nZXQtd2F0Y2hlcy5waHAnLCB7fSkuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcblxuICAgICAgICAgICAgLy8gc2luIGVycm9yZXNcbiAgICAgICAgICAgIGlmKCFkYXRhWzBdLkNvZF9lcnJvcil7XG4gICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGRhdGEsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpe1xuICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV0uY29sbGVjdGlvbk5hbWUgPSBhbmd1bGFyLnVwcGVyY2FzZShkYXRhW2tleV0uY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29udHJvbCBkZSBlcnJvcmVzXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZihkYXRhWzBdLkNvZF9lcnJvcj09MSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbMF0uRGVzX2Vycm9yKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVswXS5EZXNfZXJyb3IpOyAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHZhciBnZXRXYXRjaGVzQ29sbGVjdGlvbiA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24pIHtcblxuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgICRodHRwLnBvc3QoJ3BocC9nZXQtd2F0Y2hlcy1jb2xsZWN0aW9uLnBocCcsIHsnY29sbGVjdGlvbic6Y29sbGVjdGlvbn0pLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAvLyBzaW4gZXJyb3Jlc1xuICAgICAgICAgICAgaWYoIWRhdGFbMF0uQ29kX2Vycm9yKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnRyb2wgZGUgZXJyb3Jlc1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaWYoZGF0YVswXS5Db2RfZXJyb3I9PTEpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhWzBdLkRlc19lcnJvcik7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbMF0uRGVzX2Vycm9yKTsgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0V2F0Y2hEZXRhaWwgPSBmdW5jdGlvbihyZWYpIHtcblxuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgIHZhciBzYWxpZGEgPSB7fTtcblxuICAgICAgICAkaHR0cC5wb3N0KCdwaHAvZ2V0LXdhdGNoLWRldGFpbC5waHAnLCB7J3JlZic6cmVmfSkuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcblxuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGRhdGEsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpe1xuXG4gICAgICAgICAgICAgICAgc2FsaWRhLmNvbGxlY3Rpb24gPSBkYXRhW2tleV0uY29sbGVjdGlvbjtcbiAgICAgICAgICAgICAgICBzYWxpZGEucmVmID0gZGF0YVtrZXldLnJlZjtcbiAgICAgICAgICAgICAgICBzYWxpZGEuZGVzY3JpcHRpb24gPSBkYXRhW2tleV0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgc2FsaWRhLnByaWNlID0gZGF0YVtrZXldLnByaWNlO1xuICAgICAgICAgICAgICAgIHNhbGlkYS5saW1pdGVkRWRpdGlvbiA9IGRhdGFba2V5XS5saW1pdGVkRWRpdGlvbjtcbiAgICAgICAgICAgICAgICBzYWxpZGEuY2FsaWJyZSA9IGRhdGFba2V5XS5jYWxpYnJlO1xuICAgICAgICAgICAgICAgIHNhbGlkYS5pbnN0cnVjdGlvbk1hbnVhbCA9IGRhdGFba2V5XS5pbnN0cnVjdGlvbk1hbnVhbDtcbiAgICAgICAgICAgICAgICBzYWxpZGEuZGltZW5zaW9ucyA9IGRhdGFba2V5XS5kaW1lbnNpb25zO1xuICAgICAgICAgICAgICAgIHNhbGlkYS50eXBlX21vdmVtZW50ID0gZGF0YVtrZXldLnR5cGVfbW92ZW1lbnQ7XG4gICAgICAgICAgICAgICAgc2FsaWRhLnBvd2VyX3Jlc2VydmUgPSBkYXRhW2tleV0ucG93ZXJfcmVzZXJ2ZTsgaWYoc2FsaWRhLnBvd2VyX3Jlc2VydmU9PTApIHNhbGlkYS5wb3dlcl9yZXNlcnZlID0gMDtcbiAgICAgICAgICAgICAgICBzYWxpZGEuZnVuY3Rpb25zID0gZGF0YVtrZXldLmZ1bmN0aW9ucztcbiAgICAgICAgICAgICAgICBzYWxpZGEuZ2xhc3MgPSBkYXRhW2tleV0uZ2xhc3M7XG4gICAgICAgICAgICAgICAgc2FsaWRhLmJhY2sgPSBkYXRhW2tleV0uYmFjazsgaWYoc2FsaWRhLmJhY2s9PSdOVUxMJykgc2FsaWRhLmJhY2sgPSAwO1xuICAgICAgICAgICAgICAgIHNhbGlkYS53YXRlcl9yZXNpc3RhbnQgPSBkYXRhW2tleV0ud2F0ZXJfcmVzaXN0YW50O1xuICAgICAgICAgICAgICAgIHNhbGlkYS5zdHJhcCA9IGRhdGFba2V5XS5zdHJhcDtcbiAgICAgICAgICAgICAgICBzYWxpZGEuaGFuZHMgPSBkYXRhW2tleV0uaGFuZHM7XG4gICAgICAgICAgICAgICAgc2FsaWRhLmxpbWl0ZWRfZWRpdGlvbiA9IGRhdGFba2V5XS5saW1pdGVkX2VkaXRpb247XG4gICAgICAgICAgICAgICAgc2FsaWRhLmNyb3duID0gZGF0YVtrZXldLmNyb3duO1xuICAgICAgICAgICAgICAgIC8vIHBvbmVtb3MgaGctc2hvdyBhIDAgZW4gbG9zIHF1ZSB0ZW5nYW4gdmFsb3IgMFxuICAgICAgICAgICAgICAgIHNhbGlkYS53aGl0ZV9kaWFfY2FzZSA9IGRhdGFba2V5XS53aGl0ZV9kaWFfY2FzZTsgaWYoc2FsaWRhLndoaXRlX2RpYV9jYXNlPT0nMCcpIHNhbGlkYS53aGl0ZV9kaWFfY2FzZSA9IDA7XG4gICAgICAgICAgICAgICAgc2FsaWRhLmJsYWNrX2RpYV9jYXNlID0gZGF0YVtrZXldLmJsYWNrX2RpYV9jYXNlOyBpZihzYWxpZGEuYmxhY2tfZGlhX2Nhc2U9PScwJykgc2FsaWRhLmJsYWNrX2RpYV9jYXNlID0gMDtcbiAgICAgICAgICAgICAgICBzYWxpZGEud2hpdGVfZGlhX2RpYWwgPSBkYXRhW2tleV0ud2hpdGVfZGlhX2RpYWw7IGlmKHNhbGlkYS53aGl0ZV9kaWFfZGlhbD09JzAnKSBzYWxpZGEud2hpdGVfZGlhX2RpYWwgPSAwO1xuICAgICAgICAgICAgICAgIHNhbGlkYS5ibGFja19kaWFfZGlhbCA9IGRhdGFba2V5XS5ibGFja19kaWFfZGlhbDsgaWYoc2FsaWRhLmJsYWNrX2RpYV9kaWFsPT0nMCcpIHNhbGlkYS5ibGFja19kaWFfZGlhbCA9IDA7XG4gICAgICAgICAgICAgICAgc2FsaWRhLmNvbG9yX3N0b25lc19kaWFsID0gZGF0YVtrZXldLmNvbG9yX3N0b25lc19kaWFsOyBpZihzYWxpZGEuY29sb3Jfc3RvbmVzX2RpYWw9PScwJykgc2FsaWRhLmNvbG9yX3N0b25lc19kaWFsID0gMDtcbiAgICAgICAgICAgICAgICBzYWxpZGEuZGlhbF9kZXNjcmlwdGlvbiA9IGRhdGFba2V5XS5kaWFsX2Rlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHNhbGlkYS5uZXcgPSBkYXRhW2tleV0ubmV3O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoc2FsaWRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHJldHVybntcbiAgICBcdGdldFdhdGNoZXM6IGdldFdhdGNoZXMsXG4gICAgICAgIGdldFdhdGNoZXNDb2xsZWN0aW9uOiBnZXRXYXRjaGVzQ29sbGVjdGlvbixcbiAgICAgICAgZ2V0V2F0Y2hEZXRhaWw6IGdldFdhdGNoRGV0YWlsXG4gICAgfVxuXG59KTtcbid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmZpbHRlcignZWRpdG9yaWFsJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbihlZGl0b3JpYWwsIHllYXIsIGNvdW50cnkpe1xuXG4gICAgICBjb25zb2xlLmxvZyhcImVkaXRvcmlhbDpcIitlZGl0b3JpYWwpO1xuXG4gICAgICB2YXIgc2FsaWRhID0gW107XG5cbiAgICAgIFx0YW5ndWxhci5mb3JFYWNoKGVkaXRvcmlhbCwgZnVuY3Rpb24odmFsdWUsIGtleSl7XG5cbiAgICAgICAgICB2YXIgc3RhdHVzID0gZmFsc2U7XG5cbiAgICAgICAgICAvLyBzaSBlcyBpbnRlcm5hdGlvbmFsIHkgYWxsXG4gICAgXHRcdFx0aWYoY291bnRyeT09J2FsbCcgJiYgeWVhcj09J2FsbCcpe1xuICAgICAgICBcdFx0c3RhdHVzID0gdHJ1ZTtcbiAgICBcdFx0XHR9ZWxzZSBpZiAoY291bnRyeT09J2FsbCcgJiYgeWVhcj09dmFsdWUueWVhcil7XG4gICAgICAgICAgICBzdGF0dXMgPSB0cnVlO1xuICAgICAgICAgIH1lbHNlIGlmIChjb3VudHJ5PT12YWx1ZS5jb3VudHJ5ICYmIHllYXI9PSdhbGwnKXtcbiAgICAgICAgICAgIHN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgfWVsc2UgaWYoY291bnRyeT09dmFsdWUuY291bnRyeSAmJiB5ZWFyPT12YWx1ZS55ZWFyKXtcbiAgICAgICAgICAgIHN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoc3RhdHVzKXtcbiAgICAgICAgICAgIHNhbGlkYS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgIFx0fSk7XG5cbiAgICAgICAgLy8gc2kgbm8gaGF5IHJlc3VsdGFkb3MgbW9zdHJhbW9zIGVsIGFsZXJ0LXBhbmVsXG4gICAgICAgIGlmIChzYWxpZGEubGVuZ3RoPT0wKXtcbiAgICAgICAgICAkKCcuYWxlcnQtYm94Jykuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgIHJldHVybiBzYWxpZGE7XG4gICAgfVxufSk7XG4ndXNlIHN0cmljdCc7XG5cbi8vKioqIGZpbHRlciBsYXRlc3QgbmV3cyBubyBkYXRhIGRlIHdvcmRwcmVzcyAtIGN1YW5kbyBoYWNpYSB1biBnZXQgZGUgbGF0ZXN0LW5ld3MuanNvbiAqKioqLy9cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5maWx0ZXIoJ2xhdGVzdE5ld3MnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG5ld3Mpe1xuXG5cdCAgIFx0dmFyIHNhbGlkYSA9IFtdO1xuXG5cdCAgIFx0YW5ndWxhci5mb3JFYWNoKG5ld3MsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpe1xuXHQgICBcdFx0aWYodmFsdWUuYWN0aXZlPT0xKXtcblx0ICAgXHRcdFx0c2FsaWRhLnB1c2godmFsdWUpO1xuXHQgICBcdFx0fVxuXHQgICBcdH0pO1xuXG5cdCAgICByZXR1cm4gc2FsaWRhO1x0XG5cdH1cbn0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnZGVsYWNvdXJBcHAnKVxuICAuZmlsdGVyKCdzbGlkZXJDb250ZW50JywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbihjb250ZW50KXtcblxuXHQgICBcdHZhciBzYWxpZGEgPSBbXTtcblxuXHQgICBcdGFuZ3VsYXIuZm9yRWFjaChjb250ZW50LCBmdW5jdGlvbih2YWx1ZSwga2V5KXtcblx0ICAgXHRcdGlmKHZhbHVlLmFjdGl2ZT09MSl7XG5cdCAgIFx0XHRcdHNhbGlkYS5wdXNoKHZhbHVlKTtcblx0ICAgXHRcdH1cblx0ICAgXHR9KTtcblxuXHQgICAgcmV0dXJuIHNhbGlkYTtcblx0fVxufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5maWx0ZXIoJ3NlbGVjdFdhdGNoZXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGl0ZW1zLCBmYW1pbHkpe1xuXG4gICAgXHR2YXIgc2FsaWRhID0gW107XG5cbiAgICBcdGlmKGZhbWlseT09J2FsbCcgfHwgZmFtaWx5PT0ndW5kZWZpbmVkJyl7XG4gICAgXHRcdHNhbGlkYSA9IGl0ZW1zO1xuICAgIFx0fWVsc2V7XG4gICAgXHRcdGZvciAodmFyIGkgPSBpdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIFx0XHRcdGlmKGl0ZW1zW2ldLmZhbWlseU5hbWUgPT0gZmFtaWx5KXtcbiAgICBcdFx0XHRcdHNhbGlkYS5wdXNoKGl0ZW1zW2ldKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH07XG4gICAgXHR9XG5cblx0ICAgXHRyZXR1cm4gc2FsaWRhO1xuXHR9XG59KTtcbid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmRpcmVjdGl2ZSgnc29jaWFsQnRucycsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm57XG4gICAgXHRyZXN0cmljdDogJ0EnLFxuICAgIFx0dGVtcGxhdGVVcmw6ICd2aWV3cy9kaXJlY3RpdmVzL3NvY2lhbC1idG5zLmh0bWwnLFxuICAgIFx0bGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKXtcbiAgICBcdFx0ICBlbGVtZW50LmJpbmQoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICBcdFx0JCgnLnNvY2lhbC1iYWNrZ3JvdW5kJykuY3NzKCdvcGFjaXR5JywwLjcpO1xuICAgICAgICAgICAgJCgnLnNvY2lhbC1idG5zJykuY3NzKCdvcGFjaXR5JywxKTtcbiAgICAgIFx0XHR9KTtcbiAgICAgIFx0XHRlbGVtZW50LmJpbmQoJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIFx0XHQkKCcuc29jaWFsLWJhY2tncm91bmQnKS5jc3MoJ29wYWNpdHknLDApO1xuICAgICAgICAgICAgJCgnLnNvY2lhbC1idG5zJykuY3NzKCdvcGFjaXR5JywwKTtcbiAgICAgIFx0XHR9KTtcbiAgICBcdH0sXG4gICAgICBzY29wZToge1xuICAgICAgICBpbWFnZTogJ0AnLFxuICAgICAgICB0aXRsZTogJ0AnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0AnLFxuICAgICAgICB0YWc6ICdAJyxcbiAgICAgICAgdXJsOiAnQCdcbiAgICAgIH0gXG4gICAgfVxufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdkZWxhY291ckFwcCcpXG4gIC5kaXJlY3RpdmUoJ2ZhY2Vib29rT3BlbkdyYXBoJywgZnVuY3Rpb24oJHJvb3RTY29wZSkge1xuXG4gICAgY29uc29sZS5sb2coXCJ0aXRsZTpcIiskcm9vdFNjb3BlLnRpdGxlKTtcblxuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdCA6ICdFJyxcbiAgICAgIC8vIHNjb3BlOiB7XG4gICAgICAvLyAgIHVybDogJHJvb3RTY29wZS50aXRsZSAgXG4gICAgICAvLyB9LFxuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9kaXJlY3RpdmVzL2ZhY2Vib29rLW9wZW4tZ3JhcGguaHRtbCcsXG4gICAgfVxufSk7XG5cbid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2RlbGFjb3VyQXBwJylcbiAgLmRpcmVjdGl2ZSgnc29jaWFsc2hhcmUnLCBbJyR3aW5kb3cnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24gbWFuYWdlRGlyZWN0aXZlICgkd2luZG93LCAkbG9jYXRpb24pIHtcblxuICAgIHJldHVybiB7XG4gICAgICAncmVzdHJpY3QnOiAnQScsXG4gICAgICAnbGluayc6IGZ1bmN0aW9uIGxpbmtpbmdGdW5jdGlvbiAoJHNjb3BlLCBlbGVtZW50LCBhdHRyKSB7XG5cbiAgICAgICAgdmFyIGtleSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSB7fSxcbiAgICAgICAgICBwcm9wRGVmYXVsdHMgPSB7XG4gICAgICAgICAgJ3VybCc6ICcnLFxuICAgICAgICAgICdwcm92aWRlcic6ICcnLFxuICAgICAgICAgICd0ZXh0JzogJycsXG4gICAgICAgICAgJ21lZGlhJzogJycsXG4gICAgICAgICAgJ2hhc2h0YWdzJzogJycsXG4gICAgICAgICAgJ3ZpYSc6ICcnLFxuICAgICAgICAgICdwb3B1cEhlaWdodCc6IDUwMCxcbiAgICAgICAgICAncG9wdXBXaWR0aCc6IDUwMFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIE9ic2VydmUgdGhlIHZhbHVlcyBpbiBlYWNoIG9mIHRoZSBwcm9wZXJ0aWVzIHNvIHRoYXQgaWYgdGhleSdyZSB1cGRhdGVkIGVsc2V3aGVyZSxcbiAgICAgICAgLy8gdGhleSBhcmUgdXBkYXRlZCBpbiB0aGlzIGRpcmVjdGl2ZS5cbiAgICAgICAgZm9yIChrZXkgaW4gcHJvcERlZmF1bHRzKSB7XG4gICAgICAgICAgaWYgKHByb3BEZWZhdWx0cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gJ3NvY2lhbHNoYXJlJyArIGtleS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBpZiAoYXR0clthdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICAgICAgICAoZnVuY3Rpb24gKGtleU5hbWUpIHtcbiAgICAgICAgICAgICAgICBhdHRyLiRvYnNlcnZlKGF0dHJpYnV0ZU5hbWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1trZXlOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KGtleSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVXNlIHRoZSBkZWZhdWx0XG4gICAgICAgICAgICAgIHByb3BlcnRpZXNba2V5XSA9IHByb3BEZWZhdWx0c1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BlcnRpZXMuZXZlbnRUcmlnZ2VyID0gYXR0ci5zb2NpYWxzaGFyZVRyaWdnZXIgfHwgJ2NsaWNrJztcblxuICAgICAgICAkc2NvcGUuZmFjZWJvb2tTaGFyZSA9IGZ1bmN0aW9uIG1hbmFnZUZhY2Vib29rU2hhcmUgKGRhdGEpIHtcblxuICAgICAgICAgICR3aW5kb3cub3BlbihcbiAgICAgICAgICAgICcvL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0nICsgZW5jb2RlVVJJKGRhdGEudXJsKVxuICAgICAgICAgICAgLCdzaGFyZXInLCAndG9vbGJhcj0wLHN0YXR1cz0wLHdpZHRoPScgKyBkYXRhLnBvcHVwV2lkdGggKyAnLGhlaWdodD0nICsgZGF0YS5wb3B1cEhlaWdodCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnR3aXR0ZXJTaGFyZSA9IGZ1bmN0aW9uIG1hbmFnZVR3aXR0ZXJTaGFyZSAoZGF0YSkge1xuICAgICAgICAgIHZhciB1cmxTdHJpbmcgPSAnLy93d3cudHdpdHRlci5jb20vaW50ZW50L3R3ZWV0Pyc7XG5cbiAgICAgICAgICBpZiAoZGF0YS50ZXh0KSB7XG4gICAgICAgICAgICB1cmxTdHJpbmcgKz0gJ3RleHQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhLnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkYXRhLnZpYSkge1xuICAgICAgICAgICAgdXJsU3RyaW5nICs9ICcmdmlhPScgKyBlbmNvZGVVUkkoZGF0YS52aWEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkYXRhLmhhc2h0YWdzKSB7XG4gICAgICAgICAgICB1cmxTdHJpbmcgKz0gJyZoYXNodGFncz0nICsgZW5jb2RlVVJJKGRhdGEuaGFzaHRhZ3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERlZmF1bHQgdG8gdGhlIGN1cnJlbnQgcGFnZSBpZiBhIFVSTCBpc24ndCBzcGVjaWZpZWRcbiAgICAgICAgICB1cmxTdHJpbmcgKz0gJyZ1cmw9JyArIGVuY29kZVVSSShkYXRhLnVybCB8fCAkbG9jYXRpb24uYWJzVXJsKCkpO1xuXG4gICAgICAgICAgJHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgdXJsU3RyaW5nLFxuICAgICAgICAgICAgJ3NoYXJlcicsICd0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9JyArIGRhdGEucG9wdXBXaWR0aCArICcsaGVpZ2h0PScgKyBkYXRhLnBvcHVwSGVpZ2h0XG4gICAgICAgICAgKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5nb29nbGVQbHVzU2hhcmUgPSBmdW5jdGlvbiBtYW5hZ2VHb29nbGVQbHVzU2hhcmUgKGRhdGEpIHtcblxuICAgICAgICAgICR3aW5kb3cub3BlbihcbiAgICAgICAgICAgICcvL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT91cmw9JyArIGVuY29kZVVSSShkYXRhLnVybClcbiAgICAgICAgICAgICwnc2hhcmVyJywgJ3Rvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD0nICsgZGF0YS5wb3B1cFdpZHRoICsgJyxoZWlnaHQ9JyArIGRhdGEucG9wdXBIZWlnaHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5yZWRkaXRTaGFyZSA9IGZ1bmN0aW9uIG1hbmFnZVJlZGRpdFNoYXJlIChkYXRhKSB7XG5cbiAgICAgICAgICAkd2luZG93Lm9wZW4oXG4gICAgICAgICAgICAnLy93d3cucmVkZGl0LmNvbS9zdWJtaXQ/dXJsPScgKyBlbmNvZGVVUkkoZGF0YS51cmwpICsgJyZ0aXRsZT0nICsgZW5jb2RlVVJJKGRhdGEudGV4dClcbiAgICAgICAgICAgICwnc2hhcmVyJywgJ3Rvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD0nICsgZGF0YS5wb3B1cFdpZHRoICsgJyxoZWlnaHQ9JyArIGRhdGEucG9wdXBIZWlnaHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5zdHVtYmxldXBvblNoYXJlID0gZnVuY3Rpb24gbWFuYWdlU3R1bWJsZXVwb25TaGFyZSAoZGF0YSkge1xuXG4gICAgICAgICAgJHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgJy8vd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/dXJsPScgKyBlbmNvZGVVUkkoZGF0YS51cmwpICsgJyZ0aXRsZT0nICsgZW5jb2RlVVJJKGRhdGEudGV4dClcbiAgICAgICAgICAgICwnc2hhcmVyJywgJ3Rvb2xiYXI9MCxzdGF0dXM9MCx3aWR0aD0nICsgZGF0YS5wb3B1cFdpZHRoICsgJyxoZWlnaHQ9JyArIGRhdGEucG9wdXBIZWlnaHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5saW5rZWRpblNoYXJlID0gZnVuY3Rpb24gbWFuYWdlTGlua2VkaW5TaGFyZSAoZGF0YSkge1xuXG4gICAgICAgICAgJHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgJy8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJnVybD0nICsgZW5jb2RlVVJJKGRhdGEudXJsKSArICcmdGl0bGU9JyArIGVuY29kZVVSSShkYXRhLnRleHQpXG4gICAgICAgICAgICAsJ3NoYXJlcicsICd0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9JyArIGRhdGEucG9wdXBXaWR0aCArICcsaGVpZ2h0PScgKyBkYXRhLnBvcHVwSGVpZ2h0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUucGludGVyZXN0U2hhcmUgPSBmdW5jdGlvbiBtYW5hZ2VQaW50ZXJlc3RTaGFyZSAoZGF0YSkge1xuXG4gICAgICAgICAgJHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgJy8vd3d3LnBpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9idXR0b24vP3VybD0nICsgZW5jb2RlVVJJKGRhdGEudXJsKSArICcmbWVkaWE9JyArIGVuY29kZVVSSShkYXRhLm1lZGlhKSArICcmZGVzY3JpcHRpb249JyArIGVuY29kZVVSSShkYXRhLnRleHQpXG4gICAgICAgICAgICAsJ3NoYXJlcicsICd0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9JyArIGRhdGEucG9wdXBXaWR0aCArICcsaGVpZ2h0PScgKyBkYXRhLnBvcHVwSGVpZ2h0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuZGlnZ1NoYXJlID0gZnVuY3Rpb24gbWFuYWdlRGlnZ1NoYXJlIChkYXRhKSB7XG5cbiAgICAgICAgICAkd2luZG93Lm9wZW4oXG4gICAgICAgICAgICAnLy93d3cuZGlnZy5jb20vc3VibWl0P3VybD0nICsgZW5jb2RlVVJJKGRhdGEudXJsKSArICcmdGl0bGU9JyArIGVuY29kZVVSSShkYXRhLnRleHQpXG4gICAgICAgICAgICAsJ3NoYXJlcicsICd0b29sYmFyPTAsc3RhdHVzPTAsd2lkdGg9JyArIGRhdGEucG9wdXBXaWR0aCArICcsaGVpZ2h0PScgKyBkYXRhLnBvcHVwSGVpZ2h0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUudHVtYmxyU2hhcmUgPSBmdW5jdGlvbiBtYW5hZ2VUdW1ibHJTaGFyZSAoZGF0YSkge1xuICAgICAgICAgIC8vdHVtYmxyIGRvZXNudCBsaWtlcyBodHRwOi8vIG9yIGh0dHBzOi8vIGFjdHVhbGx5IGl0cyBhIG1pc3RlcnlcbiAgICAgICAgICAkd2luZG93Lm9wZW4oXG4gICAgICAgICAgICAnLy93d3cudHVtYmxyLmNvbS9zaGFyZS9saW5rP3VybD0nICsgZW5jb2RlVVJJKGRhdGEudXJsLnJlcGxhY2UoJ2h0dHA6Ly8nLCAnJykucmVwbGFjZSgnaHR0cHM6Ly8nKSkgKyAnJmRlc2NyaXB0aW9uPScgKyBlbmNvZGVVUkkoZGF0YS50ZXh0KVxuICAgICAgICAgICAgLCdzaGFyZXInLCAndG9vbGJhcj0wLHN0YXR1cz0wLHdpZHRoPScgKyBkYXRhLnBvcHVwV2lkdGggKyAnLGhlaWdodD0nICsgZGF0YS5wb3B1cEhlaWdodCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnZrU2hhcmUgPSBmdW5jdGlvbiBtYW5hZ2VWa1NoYXJlIChkYXRhKSB7XG5cbiAgICAgICAgICR3aW5kb3cub3BlbihcbiAgICAgICAgICAgICcvL3d3dy52ay5jb20vc2hhcmUucGhwP3VybD0nICsgZW5jb2RlVVJJKGRhdGEudXJsKVxuICAgICAgICAgICAgLCdzaGFyZXInLCAndG9vbGJhcj0wLHN0YXR1cz0wLHdpZHRoPScgKyBkYXRhLnBvcHVwV2lkdGggKyAnLGhlaWdodD0nICsgZGF0YS5wb3B1cEhlaWdodCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLmRlbGljaW91c1NoYXJlID0gZnVuY3Rpb24gbWFuYWdlRGVsaWNpb3VzU2hhcmUgKGRhdGEpIHtcblxuICAgICAgICAgICR3aW5kb3cub3BlbihcbiAgICAgICAgICAgICcvL3d3dy5kZWxpY2lvdXMuY29tL3NhdmU/dj01Jm5vdWkmanVtcD1jbG9zZSZ1cmw9JyArIGVuY29kZVVSSShkYXRhLnVybCkgKyAnJnRpdGxlPScgKyBlbmNvZGVVUkkoZGF0YS50ZXh0KVxuICAgICAgICAgICAgLCdzaGFyZXInLCAndG9vbGJhcj0wLHN0YXR1cz0wLHdpZHRoPScgKyBkYXRhLnBvcHVwV2lkdGggKyAnLGhlaWdodD0nICsgZGF0YS5wb3B1cEhlaWdodCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWxlbWVudC5iaW5kKHByb3BlcnRpZXMuZXZlbnRUcmlnZ2VyLCBmdW5jdGlvbiBvbkV2ZW50VHJpZ2dlcmVkKCkge1xuXG4gICAgICAgICAgc3dpdGNoIChwcm9wZXJ0aWVzLnByb3ZpZGVyKSB7XG4gICAgICAgICAgICBjYXNlICdmYWNlYm9vayc6XG5cbiAgICAgICAgICAgICAgJHNjb3BlLmZhY2Vib29rU2hhcmUocHJvcGVydGllcyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdnb29nbGUrJzpcblxuICAgICAgICAgICAgICAkc2NvcGUuZ29vZ2xlUGx1c1NoYXJlKHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndHdpdHRlcic6XG5cbiAgICAgICAgICAgICAgJHNjb3BlLnR3aXR0ZXJTaGFyZShwcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0dW1ibGV1cG9uJzpcblxuICAgICAgICAgICAgICAkc2NvcGUuc3R1bWJsZXVwb25TaGFyZShwcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3JlZGRpdCc6XG5cbiAgICAgICAgICAgICAgJHNjb3BlLnJlZGRpdFNoYXJlKHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncGludGVyZXN0JzpcblxuICAgICAgICAgICAgICAkc2NvcGUucGludGVyZXN0U2hhcmUocHJvcGVydGllcyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdsaW5rZWRpbic6XG5cbiAgICAgICAgICAgICAgJHNjb3BlLmxpbmtlZGluU2hhcmUocHJvcGVydGllcyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdkaWdnJzpcblxuICAgICAgICAgICAgICAkc2NvcGUuZGlnZ1NoYXJlKHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndHVtYmxyJzpcblxuICAgICAgICAgICAgICAkc2NvcGUudHVtYmxyU2hhcmUocHJvcGVydGllcyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdkZWxpY2lvdXMnOlxuXG4gICAgICAgICAgICAgICRzY29wZS5kZWxpY2lvdXNTaGFyZShwcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3ZrJzpcblxuICAgICAgICAgICAgICAkc2NvcGUudmtTaGFyZShwcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG59XSk7XG5cbiJdfQ==
