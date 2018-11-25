(function () {
	"use strict";
	$(".tagline").html("<button>Visa menyn</button>");
	var button = $(".tagline > button");
	var menu = $(".menu");
	button.click(function () {
		if ( menu.hasClass("show") ) {
			menu.removeClass("show");
			button.html("Visa menyn");
		} else {
			menu.addClass("show");
			button.html("Dölj menyn");
		}
	});
}());