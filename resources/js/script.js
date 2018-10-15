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

let boxes = document.querySelectorAll('.box');
let smallBox = document.querySelector('.box-small');

let boxesArr = Array.prototype.slice.call(boxes);

if(boxesArr.length % 2 === 0) {
	smallBox.style.clear= 'left';
} else {
	smallBox.style.clear= 'none';
	smallBox.style.borderRight = '1px solid #dad7d7';
}