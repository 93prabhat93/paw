$(document).ready(function() { 
   $('.blog-carousel .owl-carousel').owlCarousel({
	    loop:false,
	    margin:30,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

$('.testimonial-carousel .owl-carousel').owlCarousel({
	    loop:false,
	    margin:30,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	$('#slides').superslides();

}); 

$("a.scroll-to-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(".scroll-to-top").hide();
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $(".scroll-to-top").fadeIn("slow");
    }
    else {
        $(".scroll-to-top").fadeOut("fast");
    }
});

$(".item").hover(function() {
    $(this).children(".read-more").animate({"height":"50px"},500);
},function() {
    $(this).children(".read-more").animate({"height":"0px"});
});

$(".contact-block").hover(function() {
    $(this).children(".orange").css("color","#fba832");
    $(this).children(".fa").css("border","1px solid #fba832");
},function() {
    $(this).children(".orange").css("color","#003f55");
    $(this).children(".fa").css("border","1px solid #003f55");
});


$(".item").hover(function() {
    $(this).children(".blog-info-area").animate({"height":"100px"},500);
    $(this).children(".pseudo").animate({"top":"100px"},500);
    $(this).find(".blog-info-area .blog-text-content .date").hide('slow');
},function() {
    $(this).children(".blog-info-area").animate({"height":"240px"},500);
    $(this).children(".pseudo").animate({"top":"240px"},500);
     $(this).find(".blog-info-area .blog-text-content .date").show('slow');
});

$(".share-section").hover(function() {
    $(this).animate({"height":"150px","width":"150px","top":"-55px","right":"-55px"},500);
     $(this).children(".fa.fa-share-alt").animate({"top":"70px","right":"70px"},500);
    $(this).children(".sharing-icons").show();
},function() {
    $(this).animate({"height":"60px","width":"60px","top":"-20px","right":"-20px"},500);
     $(this).children(".fa.fa-share-alt").animate({"top":"30px","right":"30px"},500);
    $(this).children(".sharing-icons").hide();
});

$('.menu-toggle').click(function() {
	$('ul').slideToggle('slow', function() {
	  $('ul').toggleClass('opening');
	 
	});
 	$(this).toggleClass('open');
});