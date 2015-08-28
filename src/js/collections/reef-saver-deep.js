/**
 * @author Mario Iglesias
 */

var posActual;
var lastPos;
var direction;
var deepCounter = $("#deep-counter");

var aniDiver = 1;

$(document).ready(function() {
	lastPos = $("#diver").position().top;
	direction = "down";
	// activamos el clock
	var clock = self.setInterval("clock()",50);

	$("#diver").draggable({
		axis: 'y',
		start: function(){
			aniDiver = 0;
			console.log("start");
		},
		drag: function(event, ui){
			
		},
		stop: function(){
			aniDiver = 1;
			aniDiverDown();
			console.log("stop");
		},
		containment: "parent",
		cursor: "pointer"
	});

	aniDiverDown();

});

// clock para controlar la posicion del diver
function clock(){

	posActual = $("#diver").position().top;
	// console.log("actualPos"+posActual);

	// $("#diver").css('transform','rotate(360deg)');
	// $("#diver").animate({transform:'rotate(360deg)'});


	if (lastPos>posActual){
		console.log("up");
		lastPos = posActual;
		$("#diver").css('transform','rotate(360deg)');
		// direction = "up";
	}

	if (lastPos<posActual){
		console.log("down");
		lastPos = posActual;
		$("#diver").css('transform','rotate(180deg)');
		// direction = "down";
	}

	// funcionamiento dependiendo de la posición del buzo
	var reefOpacity = ((lastPos*100/387)-100);

	deepCounter.text(Math.round((reefOpacity+100)*5)+' m' );
	$("#reef-saver").css( 'opacity',-((reefOpacity+15)/100) );
	// console.log(-((reefOpacity+15)/100));
}

function aniDiverDown(){
	$('#diver').fadeTo(1000, 0.3, function() {
      // Animation complete.
      aniDiverUp();
    });
}

function aniDiverUp(){
	$('#diver').fadeTo(1000, 1, function() {
      // Animation complete.
      if(aniDiver==1) aniDiverDown();
    });

	console.log(aniDiver);
}