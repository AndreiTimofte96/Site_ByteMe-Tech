jQuery(document).ready(function() {
	
	// define variables
	var headerOffset, scrollPos = 0;
	
	// add utility wrapper elements for positioning
	jQuery("header").wrap('<div class="header-placeholder"></div>');
	jQuery("header").wrapInner('<div class="header-inner"></div>');
	jQuery(".header-inner").wrapInner('<div class="header-inner-most"></div>');
	
	// function to run on page load and window resize
	function stickyUtility() {
		
		// only update headerOffset if it is not currently using fixed position
		if (!jQuery("header").hasClass("fixed")) {
			headerOffset = jQuery("header").offset().top;
		}
		
		// apply matching height to header wrapper div to avoid awkward content jumps
		jQuery(".header-placeholder").height(jQuery("header").outerHeight());
		
	} // end stickyUtility function
	
	// run on page load
	stickyUtility();
	
	// run on window resize
	jQuery(window).resize(function() {
		stickyUtility();
	});
	
	// run on scroll event
	jQuery(window).scroll(function() {
		
		scrollPos = jQuery(window).scrollTop();
		
		if (scrollPos >= headerOffset) {
			jQuery("header").addClass("fixed");
		} else {
			jQuery("header").removeClass("fixed");
		}
		
	});
	
});		