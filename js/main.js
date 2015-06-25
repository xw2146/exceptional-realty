<<<<<<< HEAD
$(function() {

  ////////// Mobile Menu //////////

  $('a.menu-icon').click(function() {
    $('#menu-links').slideToggle();
  });

  // fix hidden links on window resize

  $(window).resize(function() {
    if ($(window).width() > 700) {
      $('#menu-links').removeAttr('style');
    }
  });

=======
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
>>>>>>> c236907697eec6d44889baca89b81154276c9079
});