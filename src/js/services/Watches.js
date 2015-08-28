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