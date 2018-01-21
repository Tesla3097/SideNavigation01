$(function() {
	
	var $header = $('#header');
	
	$(window).scroll(function() {
		
		if ($(window).scrollTop() > 50) {
			
			$header.addClass('fixed');
			
		} else {
			
			$header.removeClass('fixed');
		}
		
	});
	
	var $wrapper = $('#wrapper');
	
	$('#toggle-menu').click(function(){
		
		$header.toggleClass('open');
		$wrapper.toggleClass('open');
	
	});
	
});
