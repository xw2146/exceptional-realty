$(document) .ready(function() {

	/////// Mobile Menu /////////
	$('a.menu-icon').click(function(){
		$('#menu-links').slideToggle();
	});

	/////// Fix Hidden Links on Windon Resize ///////
	$(window).resize(function(){
		if($(window).width()>700){
			$('#menu-links').removeAttr('style');
		}
	});
});