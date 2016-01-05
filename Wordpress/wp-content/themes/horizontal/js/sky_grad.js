(function($) {
	//constants
	var PAGES = 5; //number of pages
	//get the date time
	var currentDate = new Date();
	var hour = parseInt(currentDate.getHours()); //get the hour
	
	//method to make stars
	function makeStars(brightness) {
		var winHeight = $(window).height(); //window height
		var winWidth = $(window).width();    //window width
		var count = Math.floor((Math.random() * 500) + 1) + 200; //how many starts in the sky?
		
		for (i=0; i<count; i++) {
			var posX = Math.floor((Math.random() * (winWidth*PAGES)) + 1);
			var posY = Math.floor((Math.random() * (winHeight)) + 1);
			var size = Math.floor((Math.random() * 3) + 1); //how big is the star
			var bright = brightness - Math.floor((Math.random() * 2));
			
			$('.stars').append('<div id="star' + i + '"> </div>');
			$('#star' + i).css('top', posY);
			$('#star' + i).css('left', posX);
			$('#star' + i).css('width', size);
			$('#star' + i).css('height', size);
			$('#star' + i).css('background', '#FFFFFF');
			$('#star' + i).css('position', 'absolute');
			$('#star' + i).css('z-index', 2);
			$('#star' + i).css('box-shadow', '0 0 5px #ffffff');
			$('#star' + i).css('border-radius', 10);
			$('#star' + i).css('opacity', bright );
		}
		
	}
	
	$(document).ready(function() {
	

		//Gonna need to figure out the browser to set up pretty CSS filters
		if($.browser.chrome) {
			//broswer is chrome
			//depending on the time, make the sky gradient different
			//make the trees darker or brighter
			//make the foreground darker or brighter
			if ( hour > 7 && hour < 17 ) {
				//daytime sky
				$("body").css('background', '-webkit-gradient(linear, left top, left bottom, color-stop(1%,#7abcff), color-stop(55%,#dbf0ff), color-stop(90%,#FFFFFF), color-stop(100%,#7abcff))');
			} else if ( hour >= 17 && hour < 20 )  {
				//dusk sky
				$("body").css('background', '-webkit-gradient(linear, left top, left bottom, color-stop(1%,#2047d6), color-stop(23%,#1fa7dd), color-stop(47%,#fcd71b), color-stop(90%,#ff9605), color-stop(100%,#2047d6))');
				$('.background').css('-webkit-filter', 'brightness(0.9)');
				makeStars(0.4);
			} else if ( hour <= 7 && hour > 5 )  {
				//morning sky
				$("body").css('background', '-webkit-gradient(linear, left top, left bottom, color-stop(0%,#1fa7dd), color-stop(33%,#fcd71b), color-stop(76%,#ff9605), color-stop(90%,#ff9605), color-stop(100%,#1fa7dd))');
				$('.background').css('-webkit-filter', 'brightness(1.1) contrast(1.3)');
				makeStars(0.2);
			} else {
				//night sky
				$("body").css('background', '-webkit-gradient(linear, left top, left bottom, color-stop(0%,#000921), color-stop(46%,#2047d6), color-stop(90%,#1774aa), color-stop(100%,#000921))');
				$('.background').css('-webkit-filter', 'brightness(0.7) contrast(1.3)');
				$('.foreground').css('-webkit-filter', 'brightness(0.9) contrast(1.1)');
				makeStars(0.9);
			}
		} else if ($.browser.mozilla) {
			//broswer is mozilla
			
			//depending on the time, make the sky gradient different
			if ( hour > 7 && hour < 17 ) {
				//daytime sky
				$("body").css('background', '-moz-linear-gradient(top, rgba(122,188,255,1) 0%, rgba(219,240,255,1) 55%, rgba(255,255,255,1) 90%, rgba(122,188,255,1) 100%)');
	
			} else if ( hour >= 17 && hour < 20 )  {
				//dusk sky
				$("body").css('background', '-moz-linear-gradient(top, rgba(32,71,214,1) 0%, rgba(31,167,221,1) 23%, rgba(252,215,27,1) 47%, rgba(255,150,5,1) 90%, rgba(32,71,214,1) 100%)');
				$('.background').css('-moz-filter', 'brightness(0.9)');
	
			} else if ( hour <= 7 && hour > 5 )  {
				//morning sky
				$("body").css('background', '-moz-linear-gradient(top, rgba(31,167,221,1) 0%, rgba(252,215,27,1) 50%, rgba(255,150,5,1) 51%, rgba(255,150,5,1) 90%, rgba(31,167,221,1) 100%)');
				$('.background').css('-moz-filter', 'brightness(1.1) contrast(1.3)');
				makeStars(0.2);
	
			} else {
				//night sky
				$("body").css('background', '-moz-linear-gradient(top, rgba(0,9,43,1) 0%, rgba(32,71,214,1) 46%, rgba(23,116,170,1) 90%, rgba(0,9,43,1) 100%)');
				$('.background').css('-moz-filter', 'brightness(0.7) contrast(1.3)');
				$('.foreground').css('-moz-filter', 'brightness(0.9) contrast(1.1)');
				makeStars(0.9);
			}
			
		} else if ($.browser.msie) {
			//broswer is IE
			
			//depending on the time, make the sky gradient different
			if ( hour > 7 && hour < 17 ) {
				//daytime sky
				$("body").css('background', '-ms-linear-gradient(top, rgba(122,188,255,1) 0%, rgba(219,240,255,1) 55%, rgba(255,255,255,1) 90%, rgba(122,188,255,1) 100%)');
				$('.background').css('-ms-filter', 'brightness(1)');
			} else if ( hour >= 17 && hour < 20 )  {
				//dusk sky
				$("body").css('background', '-ms-linear-gradient(top, rgba(32,71,214,1) 0%, rgba(31,167,221,1) 23%, rgba(252,215,27,1) 47%, rgba(255,150,5,1) 90%, rgba(32,71,214,1) 100%)');
				$('.background').css('-ms-filter', 'brightness(0.9)');
			} else if ( hour <= 7 && hour > 5 )  {
				//morning sky
				$("body").css('background', '-ms-linear-gradient(top, rgba(31,167,221,1) 0%, rgba(252,215,27,1) 50%, rgba(255,150,5,1) 51%, rgba(255,150,5,1) 90%, rgba(31,167,221,1) 100%)');
				$('.background').css('-ms-filter', 'brightness(1.1) contrast(1.3)');
				makeStars(0.2);
	
			} else {
				//night sky
				$("body").css('background', '-ms-linear-gradient(top, rgba(0,9,43,1) 0%, rgba(32,71,214,1) 46%, rgba(23,116,170,1) 90%, rgba(0,9,43,1) 100%)');
				$('.background').css('-ms-filter', 'brightness(0.7) contrast(1.3)');
				$('.foreground').css('-ms-filter', 'brightness(0.9) contrast(1.1)');
				makeStars(0.9);
			}
			
		} else if ($.browser.webkit) {
			//browser is webkit
			
			//depending on the time, make the sky gradient different
			//make the trees darker or brighter
			//make the foreground darker or brighter
			if ( hour > 7 && hour < 17 ) {
				//daytime sky
				$("body").css('background', '-webkit-gradient(linear, left top, left bottom, color-stop(1%,#7abcff), color-stop(55%,#dbf0ff), color-stop(90%,#FFFFFF), color-stop(100%,#7abcff))');
			} else if ( hour >= 17 && hour < 20 )  {
				//dusk sky
				$("body").css('background', '-webkit-gradient(linear, left top, left bottom, color-stop(1%,#2047d6), color-stop(23%,#1fa7dd), color-stop(47%,#fcd71b), color-stop(90%,#ff9605), color-stop(100%,#2047d6))');
				$('.background').css('-webkit-filter', 'brightness(0.9)');
				makeStars(0.4);
			} else if ( hour <= 7 && hour > 5 )  {
				//morning sky
				$("body").css('background', '-webkit-gradient(linear, left top, left bottom, color-stop(0%,#1fa7dd), color-stop(33%,#fcd71b), color-stop(76%,#ff9605), color-stop(90%,#ff9605), color-stop(100%,#1fa7dd))');
				$('.background').css('-webkit-filter', 'brightness(1.1) contrast(1.3)');
				makeStars(0.2);
			} else {
				//night sky
				$("body").css('background', '-webkit-gradient(linear, left top, left bottom, color-stop(0%,#000921), color-stop(46%,#2047d6), color-stop(90%,#1774aa), color-stop(100%,#000921))');
				$('.background').css('-webkit-filter', 'brightness(0.7) contrast(1.3)');
				$('.foreground').css('-webkit-filter', 'brightness(0.9) contrast(1.1)');
				makeStars(0.9);
			}
		
		} else {
			//whatever else is it
			//depending on the time, make the sky gradient different
			if ( hour > 7 && hour < 17 ) {
				//daytime sky
				$("body").css('background', 'linear-gradient(top, rgba(122,188,255,1) 0%, rgba(219,240,255,1) 55%, rgba(255,255,255,1) 90%, rgba(122,188,255,1) 100%)');
				
			} else if ( hour >= 17 && hour < 20 )  {
				//dusk sky
				$("body").css('background', 'linear-gradient(top, rgba(32,71,214,1) 0%, rgba(31,167,221,1) 23%, rgba(252,215,27,1) 47%, rgba(255,150,5,1) 90%, rgba(32,71,214,1) 100%)');
				$('.background').css('filter', 'brightness(0.9)');
			} else if ( hour <= 7 && hour > 5 )  {
				//morning sky
				$("body").css('background', 'linear-gradient(top, rgba(31,167,221,1) 0%, rgba(252,215,27,1) 50%, rgba(255,150,5,1) 51%, rgba(255,150,5,1) 90%, rgba(31,167,221,1) 100%)');
				$('.background').css('filter', 'brightness(1.1) contrast(1.3)');
				makeStars(0.2);
			} else {
				//night sky
				$("body").css('background', 'linear-gradient(top, rgba(0,9,43,1) 0%, rgba(32,71,214,1) 46%, rgba(23,116,170,1) 90%, rgba(0,9,43,1) 100%)');
				$('.background').css('filter', 'brightness(0.7) contrast(1.3)');
				$('.foreground').css('filter', 'brightness(0.9) contrast(1.1)');
				makeStars(0.9);
			}
			
		}
		//setting up filters
    
		

   	
})
})( jQuery );