jQuery(document).ready(function($) {
	$( "#documenter_nav li a,#documenter_logo" ).click(function(event){
		event.preventDefault();
		$( "#documenter_nav li a" ).removeClass( "actived" );
		$(this).addClass('actived');
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});
	$( "#documenter_nav > li > a,#documenter_logo" ).click(function(event){
		$( "#documenter_nav ul" ).slideUp(1000);
		$(this).next().slideDown(1000);
	});
});
