jQuery(document).ready( function() {	
					
     $('.tableBox').matchHeight();
	 $('#egitimHomeContent .egitimBottomBoxes a').matchHeight();				
					
		$(".sliderCalenderContainer ul li a").mouseenter(function () {
        $(".eventContentContainer").css("display","block");	
    	});
	$(".sliderCalenderContainer ul li a").mouseleave(function () {
        $(".eventContentContainer").css("display","none");	
    });
	
	//$(".rightMenu ul li.level2 a").prepend(" <span class='leftContainer menuMinus'>- </span> ");
	//$(".rightMenu ul li.level3 a").prepend(" <span class='leftContainer menuMinus'>- </span>  ");
	
	$( "#homeGalleryContainer a.top2" ).after( "<span class='saver hiddenText'>&nbsp;</span>" );
	
	$(".contentTable tr:first").addClass("contentTableTitle");
	$(".contentTable tr:odd").addClass("contentTableZebra");
	$(".newsListPagining a:last").css("border", "none");	

					
	/*$("#homeDefaultFlashContainer").owlCarousel({
      navigation : false,
	  pagination : false,
      slideSpeed : 800,
	  responsive : true,
      paginationSpeed : 600,
      singleItem : true,
	  //transitionStyle : "goDown",
	  autoPlay : true,
	  loop: true,
	  navigationText : ["",""]
      });*/
	
	$('#homeDefaultFlashContainer').owlCarousel({
		loop:true,
		items:1,
		margin:0,
		nav:false,
		dots:false,
		autoplay:true,
		autoplayTimeout:5000
	});
	  
	/* $("#homeFlashContainer").owlCarousel({
      navigation : false,
	  pagination : false,
      slideSpeed : 800,
	  responsive : true,
      paginationSpeed : 600,
      singleItem : true,
	  //transitionStyle : "goDown",
	  autoPlay : true,
	  navigationText : ["",""]
      });*/
	 
	 $('#homeFlashContainer').owlCarousel({
		//loop:true,
		items:1,
		margin:0,
		nav:false,
		dots:false
	});
	  
	/* $(".homeSlideBannerContainer").owlCarousel({
	  navigation : false,
	  pagination : true,
      slideSpeed : 800,
	  responsive : true,
      paginationSpeed : 600,
	  singleItem : true,
	  //transitionStyle : "goDown",
	  autoPlay : true,
	  navigationText : ["",""]
      });*/
	 
	 $('.homeSlideBannerContainer').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		nav:false,
		dots: true,
		autoplay:true,
		autoplayTimeout:6000
	});
	  
	/* $(".homeNewsSliderContainer").owlCarousel({
	  navigation : true,
	  pagination : false,
      slideSpeed : 1800,
	  responsive : true,
      paginationSpeed : 600,
	  autoPlay : true,
	  singleItem : true,
	  navigationText : ["",""]
      });*/
	 
	   $('.homeNewsSliderContainer').owlCarousel({
			loop:true,
			margin:0,
			items:1,
			nav:true,
			dots: false,
			autoplay:true,
			autoplayTimeout:6000
	   });
	 
	  $(".homeBDUpcomingEventsContainer ul").owlCarousel({
	  items : 4,
	  navigation : false,
	  pagination : true,
      slideSpeed : 1800,
	  responsive : false,
      paginationSpeed : 600,
	  autoPlay : false,
	  navigationText : ["",""]
      });
	  
	  $("#sliderCalenderContainer ul").owlCarousel({
      items : 7,
	  navigation : true,
	  pagination : false,
      slideSpeed : 1600,
	  responsive : true,
      paginationSpeed : 600,
	  autoPlay : false,
	  navigationText : ["",""]
      });
	  
	 $('.velilerSlideBannerContainer').slick({
  	  centerMode: true,
      centerPadding: '0',
      slidesToShow: 3,
	  autoplay: false,
      autoplaySpeed: 7000,
	  variableWidth:false,
	  arrows:false,
	  dots:true,
      responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 481,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});
	  
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',deeplinking:false});
	$("a[rel^='prettyPhotoYoutube']").prettyPhoto({theme:'light_square',slideshow:false});
	  
	$(".mobileTopMenuOpen").click(function () {
        $(".mobileTopMenu").slideToggle("fast");
    });
	
	$(".mobileTopMenuClose").click(function () {
        $(".mobileTopMenu").slideToggle("fast");
    });
	
	
	$('.pageTopBtn').click(function(){
		$('html, body').animate({
			scrollTop: $("#headerContainer").offset().top
				}, 1000);				   						   
	});
	
	$("body a").each(function() {
      $(this).attr("href", $(this).attr("href").replace("-+-", "--"));
    });

	
	$("#detailContentHTML .pageHTML ul li:nth-child(1)").addClass("firstBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(2)").addClass("secondBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(3)").addClass("thirdBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(4)").addClass("fourthBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(5)").addClass("firstBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(6)").addClass("secondBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(7)").addClass("thirdBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(8)").addClass("fourthBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(9)").addClass("firstBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(10)").addClass("secondBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(11)").addClass("thirdBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(12)").addClass("fourthBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(13)").addClass("firstBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(14)").addClass("secondBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(15)").addClass("thirdBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(16)").addClass("fourthBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(17)").addClass("firstBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(18)").addClass("secondBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(19)").addClass("thirdBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(20)").addClass("fourthBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(21)").addClass("firstBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(22)").addClass("secondBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(23)").addClass("thirdBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(24)").addClass("fourthBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(25)").addClass("firstBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(26)").addClass("secondBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(27)").addClass("thirdBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(28)").addClass("fourthBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(29)").addClass("firstBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(30)").addClass("secondBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(31)").addClass("thirdBullet");
	$("#detailContentHTML .pageHTML ul li:nth-child(32)").addClass("fourthBullet");

}); 

$(function(){
$('.homeSearchCitySelect select').customSelect();
		   });
			
