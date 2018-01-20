$(function() {
	
	var $header = $('#header');
	
	$(window).scroll(function() {
		
		if ($(window).scrollTop() > 50) {
			
			$header.addClass('fixed');
			
		} else {
			
			$header.removeClass('fixed');
		}
		
	});
	
	$('#nav-toggle').click(function(){
		
		$header.toggleClass('open');
	
	});
	
});