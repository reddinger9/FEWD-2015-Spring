(function($) {


	function init($target) {
		//Guard against re-initialization
		if (! $target.hasClass("mytabs")) {
			$target.addClass("mytabs").on("click", ".tab-nav .tab", onClick);
		}
	}

	//Event handler
	function onClick(event) {
		var $parent = $(event.delegateTarget),
			$target = $(this),
			$tabHandles = $parent.find(".tab-nav .tab"),
			$tabContent = $parent.find(".tab-content .tab"),
			index = $tabHandles.index($target);

		$tabHandles.removeClass("active").eq(index).addClass("active");
		$tabContent.removeClass("active").eq(index).addClass("active");
	}

	$.fn.myTabs = function() {
		//Cache targets
		var $targets = $(this);

		//Loop through all targets
		for (var i = 0; i < $targets.length; i++) {
			init($targets.eq(i));
		};

		//Maintain chainability
		return $targets;
	}

}) (jQuery);