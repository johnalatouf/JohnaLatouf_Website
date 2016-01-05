(function($) {


//when the document is ready
$(window).on("load resize",function(e){
	//get dimensions
	var winHeight = $(window).height(); //window height
	var winWidth = $(window).width();    //window width
	
	 //constants 
	 var NAVPERCENT = 0.033; //this determines the size of the nave link text
	 var NAVPADPERCENT = 0.03; //this determines the padding of the nav links
   	 //variables
   	 //get the panel margin so we can position stuff
   	 var panMarg;
   	 var panWidth = winWidth - 2*panMarg; //the panel width
   	 var panPad = parseFloat($(".panel").css("padding-left")); // the panel padding
   	 var rightPad = winWidth - panPad;
   	 var pageNum = $("#content").children().size(); // how many pages are there?
   	 var mainWidth = pageNum * (winWidth); // the full width of the main div
   	 var panelHeight = winHeight - 220; //the panel height
   	 var navText = (panWidth*NAVPERCENT); //decide the text size
   	 var navPad = (panWidth*NAVPADPERCENT); //decide the padding of the nav text
   	 
   	 
   	 //size the main div and images
   	 if ( winWidth < 400 && /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   	 	//fix window width/height
   	 	winHeight = $(window).height(); //window height
		winWidth = $(window).width();    //window width
   	 
   	 	$("body").css("height", winHeight);
   	 	$("header").css("width", winWidth);
   	 	$("header").css("margin", "0 0 0 0");
   	 	$("header").css("float", "left");
   	 	//$(".scrollable").css("border", "2px solid #00FFAA");
   	 	//$("body").css("border", "2px solid #FF44AA");
	 	$(".background").css("width", mainWidth*1.3);
	 	$(".background").css("background-position", "bottom");
   	 	$(".stars").css("width", mainWidth*1.3);
   	 	panelHeight = winHeight - 200; //the panel height
   	 	panMarg = 20;
   	 	$(".panel").css("margin-left", panMarg);
   	 	$(".scrollable").css("font-size", "50%");
   	 	$(".scrollable").css("padding-right", 10);
   	 	
   	 	//title text
   	 	$(".site-title").css("font-size", 12pt);
   	 	$(".site-description").css("font-size", 10pt);
   	 	$(".site-info").css("font-size", 9pt);
   	 	$(".site-info").css("width", winWidth);
   	 	
   	 } else if ( winWidth < 760 ) {
	 	$(".background").css("width", mainWidth*1.3);
	 	$(".background").css("background-position", "bottom");
   	 	$(".stars").css("width", mainWidth);
   	 	panelHeight = winHeight - 270; //the panel height
   	 	panMarg = 150;
   	 	$(".panel").css("margin-left", panMarg);
   	 	$(".scrollable").css("font-size", "100%");
   	 	
   	 } else {
		 $(".background").css("width", mainWidth);
		 $(".background").css("background-position", "center");
		 $(".stars").css("width", mainWidth);
		 panMarg = 150;
		 $(".panel").css("margin-left", panMarg);
		 $(".scrollable").css("font-size", "100%");
   	 }
   	 $(".foreground").css("width", mainWidth);
   	 //size the panel
   	 panWidth = winWidth - 2*panMarg ; //the panel width
   	 $(".panel").css( "width", panWidth );
   	 $(".panel").css("height", panelHeight);
   	 //size the nav links
   	 navText = (panWidth*NAVPERCENT); //decide the text size
   	 navPad = (panWidth*NAVPADPERCENT); //decide the padding of the nav text
   	 $(".main-navigation").css( "width", panWidth );
   	 $(".main-navigation").css( "font-size", navText);
   	 $(".main-navigation li").css( "padding-left", navPad);
   	 $(".main-navigation li").css( "padding-right", navPad);
   	 
   	 

   	 


	//when you are already on a link, slide to that stuff
   	if(window.location.hash){
   		//var target = $(this).attr("href");
   		var target = window.location.hash;
   		var targetJump = ($(target).offset().left) - panMarg;
   		$("html, body").stop().animate({ scrollLeft: targetJump, scrollTop: $(target).offset().top }, 1200);
   		$(".foreground").stop().animate({ left: -targetJump }, 3000);
   		$(".background").stop().animate({ left: -targetJump }, 600);
   		$(".stars").stop().animate({ left: -targetJump }, 4000);
   	}
   	 
   	 //set active based on hash
   	 
   	//when you click a link, slide to that stuff
   	$("#menu-main-menu a").bind("click",function(event) {
   		//event.preventDefault();
   		var target = $(this).attr("href");
   		var targetJump = ($(target).offset().left) - panMarg;
   		
   		$("html, body").stop().animate({ scrollLeft: targetJump, scrollTop: $(target).offset().top }, 1200);
   		//$("#main").stop().animate({ left: (-$(target).offset().left) }, 1000);
   		//$(".foreground").stop().animate({ left: -targetJump }, 3000);
   		$(".background").stop().animate({ left: -targetJump }, 600);
   		$(".stars").stop().animate({ left: -targetJump }, 4000);
   		
   		//change the foreground for phones
   		if ( winWidth < 400 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   			$(".foreground").stop().animate({ left: - ( targetJump/1.35 ) }, 3000);
   		} else {
   			$(".foreground").stop().animate({ left: -targetJump }, 3000);
   		}
   		
   		
   		//designate only this button as "active" so it highlights
   		$("#menu-main-menu a").removeClass('active');
   		$(this).addClass('active');
   		
		
   	}); 
   	
   	////////////////////////////////TESTING/////////////////////////////////
   	 $("#windowWidth").text(winWidth);
   	 $("#windowHeight").text(winHeight);
   	 $("#panelWidth").text(panWidth);
   	 $("#panelPadding").text(panPad);
   	 $("#pageNum").text(pageNum);
   	 $("#mainWidth").text(mainWidth);
   	 $("#testing").hide(); //comment this to display debug window
   	 ////////////////////////////////TESTING/////////////////////////////////
   	 
   	 
   	 /////////////////////////////// SCROLL BAR /////////////////////////////////
   
   	//use each to go through each panel and add a scrollbar
   	$('.panel').each(function() {
   		var $scrollable = $(this).children('.scrollable'),
			$scrollbar  = $(this).children('.scrollbar'),
			H   = $scrollable.outerHeight(true),
			sH  = $scrollable[0].scrollHeight,
			sbH = (H*H/sH) -4 ;
   		if ($scrollable.prop('scrollHeight') > $scrollable.height() ) {
   			//there should be a scroll bar

			 $(this).children('.scrollbar').height( sbH ).draggable({
				axis : 'y',
				 containment : 'parent', 
				  drag: function(e, ui) {
						$scrollable.scrollTop( (sH/H*ui.position.top) + 2  );
				}
			}); 
 
			$scrollable.on("scroll", function(){
				$scrollbar.css({top: $scrollable.scrollTop()/H*sbH });
			});
		} else {
			// there shouldn't be a scrollbar
			//$scrollbar.hide();
		}
   	});
	
 
   	
})

})( jQuery );