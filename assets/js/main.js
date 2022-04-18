/*---------------------------------------------
  Theme Name: 
  Author: 
  Description: 
  Version: 1.0.0
----------------------------------------------*/

(function ($) {
	"use strict";

	$(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(600).fadeOut();
    });
	
	/* ====== SHOW & HIDE MENU ====== */
	$(".menu-toggle-btn").click(function () {
		$(".main-menu").toggleClass("show-menu");
	});
})(jQuery);