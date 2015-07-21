$(document).ready(function(){

	$(".carousel").carousel({
		show: {
			"300px" : 2,
			"740px" : 3,
			"980px" : 4,
			"1200px" : 6
		} 

	});  

	$(".carousel").touch({
	    swipe: true
	}).on("swipe", function(e) {
	    console.log("Swiped");
	});

})
