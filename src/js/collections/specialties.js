$( ".item-special" ).mouseover(function() {
  	$(this).find('.content-special').css('opacity',0.7);
});

$( ".item-special" ).mouseout(function() {
  	$(this).find('.content-special').css('opacity',0);
});