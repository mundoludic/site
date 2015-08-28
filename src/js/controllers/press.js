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
