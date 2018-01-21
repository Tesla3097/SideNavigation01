$(function() {
	
	var $header = $('#header');
	
	var $wrapper = $('#wrapper');
	
	$('#toggle-menu').click(function(){
		
		$header.toggleClass('open');
		$wrapper.toggleClass('open');
	
	});
	
});
