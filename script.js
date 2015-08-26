var main = function() {

	$('.dropdown-hover').hover( function() {
		$('.dropdown-menu').toggle();
	});


	$('.dropdown-menu').hover( function() {
		$('.dropdown-menu').toggle();
	});


	$('.arrow-next').click( function(){
		var cSlide = $('.active-slide');
		var cDot = $('.active-dot');
		var nSlide = cSlide.next();
		var nDot = cDot.next();

		if( nSlide.length === 0 ){
			nSlide = $('.slide').first();
			nDot = $('.dot').first();
		}

		cSlide.fadeOut(600).removeClass('active-slide');
		cDot.removeClass('active-dot');
		nSlide.fadeIn(600).addClass('active-slide');
		nDot.addClass('active-dot');
	});


	$('.arrow-prev').click( function(){
		var cSlide = $('.active-slide');
		var cDot = $('.active-dot');
		var pSlide = cSlide.prev();
		var pDot = cDot.prev();

		if( pSlide.length === 0 ){
			pSlide = $('.slide').last();
			pDot = $('.dot').last();
		}

		cSlide.fadeOut(600).removeClass('active-slide');
		cDot.removeClass('active-dot');
		pSlide.fadeIn(600).addClass('active-slide');
		pDot.addClass('active-dot');
	});

}

$(document).ready(main);