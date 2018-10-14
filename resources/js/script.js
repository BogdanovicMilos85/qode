$(document).ready(function () {
	
    /* Mobile navigation */
    let respmenu = $('.js--nav-icon');
	let	menu = $('.js--main-nav');
	let icon = $('.js--nav-icon i');

	$(respmenu).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle(200);
		
		if (icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }
	});
	
	$(window).resize(function(){
		let widthWin = $(window).width();
		if(widthWin > 1001 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}	
	});
});