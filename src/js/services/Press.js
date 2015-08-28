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