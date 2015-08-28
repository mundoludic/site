$(function(){

      var xhrStyles = new XMLHttpRequest();
      xhrStyles.open('GET','json/store-locator/styles.json', true);
      xhrStyles.onreadystatechange = stylesGot;
      xhrStyles.send();
      xhrStyles.close;

      var xhrStores = new XMLHttpRequest();
      xhrStores.open('GET','json/store-locator/storelocator.json', true);
      xhrStores.onreadystatechange = storesGot;
      xhrStores.send();
      xhrStores.close;

      var mapStyles;
      var stores;
      var typeStore = "all";
      var markers = [];

      function stylesGot(){
        if(xhrStyles.readyState === 4){
          if(xhrStyles.status === 200){
            mapStyles = JSON.parse(xhrStyles.responseText);
          }else{
            console.log('Response problem!!!');
          }
        }
      }

      function storesGot(){
        if(xhrStores.readyState === 4){
          if(xhrStores.status === 200){
            stores = JSON.parse(xhrStores.responseText);
            // cuando carga el json con los puntos de venta lo inicializamos
            initialize();
          }else{
            console.log('Response problem!!!');
          }
        }
      }

      function initialize() {

        var dLCMap = $("#map");

        var mapOptions = {
          center: new google.maps.LatLng(30, 10),
          zoom: 2,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: mapStyles
        };

        // enlazamos el map con el contenedor
        var map = new google.maps.Map(dLCMap[0],
            mapOptions);

        /***** GEO *****/

        // Try HTML5 geolocation
        // if(navigator.geolocation) {
        //   navigator.geolocation.getCurrentPosition(function(position) {
        //     var pos = new google.maps.LatLng(position.coords.latitude,
        //                                      position.coords.longitude);
        //     map.setOptions({zoom: 4});
        //     map.setCenter(pos);

        //     console.log("dentro store-locator.js ");

        //   }, function() {
        //     handleNoGeolocation(true);
        //   });
        // } else {
        //   // Browser doesn't support Geolocation
        //   handleNoGeolocation(false);
        // }

        /***** FIN GEO ******/

        // insertamos cada uno de los puntos de venta
        // recorremos todos los puntos de venta e insertamos los markers
        for(var i=0;i<stores.features.length;i++){

          if(typeStore == "all" || stores.features[i].type == typeStore){

            var properties = stores.features[i].properties;

            // comprobamos que esta active
            if(properties.enabled=='1'){

            // tenemos una referencia a marker y vamos añadiendo un marker por boutique
            var marker = markers[i];

            // insertamos los markers
            var myLatLng = new google.maps.LatLng(stores.features[i].geometry.coordinates[1],stores.features[i].geometry.coordinates[0]);

            // icono dLC
            var dlcMarker = 'images/store-locator/dlcMarker.png';
            if(stores.features[i].type=="boutique"){
              dlcMarker = 'images/store-locator/dlcMarkerBoutique.png';
            };
            if(stores.features[i].type=="corner"){
              dlcMarker = 'images/store-locator/dlcMarkerCorner.png';
            }

            // preparamos el contenido de info
            var contentString = '<div id="content">'+
                                '<h3 class="name">'+properties.name+'</h3>'+
                                '<div class="data"><div class="country"><strong>'+properties.country+'</strong> - '+stores.features[i].properties.city+'</div>'+
                                '<span class="normal">'+properties.address+'</span>'+
                                '<span class="normal>'+properties.phone+'</span>'+
                                '<span class="normal vinculo"><a href='+'mailto:'+properties.website+'>'+properties.email+'</a></span>'+
                                '<span class="normal vinculo"><a href='+properties.website+'>'+properties.website+'</a></span>'+
                                '<div id="street-view"></div></div>';
                                '</div>'

            marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: dlcMarker,
                animation: google.maps.Animation.DROP,
                // shape: shape,
                infowindow: contentString,
                title: stores.features[i].properties.name
            });

            var info = new google.maps.event.addListener(marker, 'click', function() {
              var infowindow = new google.maps.InfoWindow({content: this.infowindow});
              infowindow.open(map, this);

              var panoPosition = new google.maps.LatLng(marker.position.lat(),marker.position.lng());

               var panoramaOptions = {
                  position: panoPosition,
                  pov: {
                    heading: 165,
                    pitch: 0
                  },
                  zoom: 1
                };

              var myPano = new google.maps.StreetViewPanorama(
                  document.getElementById('street-view'),
                  panoramaOptions);
              myPano.setVisible(true);
            });

            // establecemos el punto de venta
            marker.setMap(map);

          } // fin if

        }//fin if filter type store

        }// fin for


        /****** SEARCH *******/

        // Search by City, Country.... etc
        var input = (
            document.getElementById('pac-input'));
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        var searchBox = new google.maps.places.SearchBox(input);
 
        google.maps.event.addListener(searchBox, 'places_changed', function() {
          var place = searchBox.getPlaces()[0];
         
          if (!place.geometry) return;
       
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(16);
          }
        });

        /****** FIN SEARCH *******/


      };// fin initialize

      // TYPE OF STORES EVENTS

      $('.btn-type-store').click(function(){
        typeStore = $(this).attr('name');
        initialize();
      });

});