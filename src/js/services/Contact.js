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