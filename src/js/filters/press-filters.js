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