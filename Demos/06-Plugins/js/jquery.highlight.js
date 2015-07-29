(function($) {

	function init($target) {
		// Guard against re-initialization
		if (! $target.hasClass("highlighted")) {
			// Add the class and attach event handlers
			$target.addClass("highlighted").click(onClick);
		}
	}

	function onClick(event) {

		var $target = $(this);

		//Check for active class
		if ($target.hasClass("active")) {
			$target.removeClass("active");
		} 
		else {
			$target.addClass("active")
		};

	}

	/* Register plug-in with jQuery */

	$.fn.highlight = function() {
		// Cache targets
		var $targets = $(this);

		for (var i = 0; i < $targets.length; i++) {
			init ($targets.eq(i));
		}

		// Maintain chain-ability
		return $targets;
	};

}) (jQuery);