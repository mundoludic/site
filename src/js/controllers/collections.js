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