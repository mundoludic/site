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