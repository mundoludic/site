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