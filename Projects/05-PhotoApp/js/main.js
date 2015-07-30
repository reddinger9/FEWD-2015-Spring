

$(document).ready(function(){

	$(".fs-carousel_large").carousel({
		show: {
			"300px" : 1,
			"740px" : 1,
			"980px" : 1,
			"1200px" : 1
		}

	});

	$(".fs-carousel_small").carousel({
		show: {
			"300px" : 4,
			"740px" : 8,
			"980px" : 8,
			"1200px" : 8
		} 

	});  

	$(".js-lightbox").lightbox();



	$(".carousel_small").touch({
	    swipe: true
	}).on("swipe", function(e) {
	    console.log("Swiped");
	});


	$('.thumbnail').click(function(){

		var $target = $(this)
		var index = $('.thumbnail').index($target)

		$('.fs-carousel_large').carousel('jump', index+1)

	});

/*	on click of thumbnail
	get index number of thumbnail
	jump to matching index number of large_img in "fs-carousel_large" */

});

new WOW().init();


