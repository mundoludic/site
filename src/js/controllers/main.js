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