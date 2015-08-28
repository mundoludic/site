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