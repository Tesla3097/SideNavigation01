$(function() {
	
	$('.menu').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		
		console.log(isInView);
		
		if(isInView){
			
			$(this).stop().addClass('menu_effect');
			
		} else {
			
			$(this).stop().removeClass('menu_effect');
			
		}
		
	});


});