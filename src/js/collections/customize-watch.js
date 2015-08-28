$(function(){

	// materiales disponibles VIP:cambiar si metemos un nuevo material
	var piedraActual;
	var materialActual;

	var next;
	var tipoComponente;

	$('.componente').css('opacity',0);

	piedraActual = $('#white');
	materialActual = $('#pg');

	function changeComponente(){

		next.animate({
	    	opacity: 1
		}, 400, function() {
			// materiales disponibles VIP:cambiar si metemos un nuevo material
			if(tipoComponente=='piedra'){
				piedraActual = $(this);
			}
			if(tipoComponente=='material'){
				materialActual = $(this);
			}
		});

		// materiales disponibles VIP:cambiar si metemos un nuevo material
		if(tipoComponente=='piedra'){
			piedraActual.animate({
	    		opacity: 0
			}, 400);
		}
		if(tipoComponente=='material'){
			materialActual.animate({
	    		opacity: 0
			}, 400);
		}
	};

	// drag & drop
	$( ".palette-btn" ).draggable({ revert: true });

	//getter
	var revert = $( ".palette-btn" ).draggable( "option", "revert" );
	//setter
	$( ".palette-btn" ).draggable( "option", "revert", true );


	$("#base").droppable({

	    drop: function() {
			changeComponente();
	  	}

	});

	$('.palette-btn').mouseover(function(){
		//sacamos el proximo componente
		next = this.id;
		next = "#" + next.slice(0,next.length-4);
		next = $(next);
		//sacamos el tipo de componente
		tipoComponente = this.getAttribute('data-componente');
	});

});