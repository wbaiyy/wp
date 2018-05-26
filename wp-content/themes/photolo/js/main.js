(function( $ ) {
 
    "use strict";
   
    //init Masonry
	var $masonry_grid = $('.masonry-grid .gallery').masonry({
	  itemSelector: '.gallery-item',
	  percentPosition: true,
	  columnWidth: '.gallery-item',
	});
	// layout Masonry after each image loads
	$masonry_grid.imagesLoaded().progress( function() {
	  $masonry_grid.masonry();
	});  

	var $striped_grid = $('.striped-grid .gallery').masonry({
	  itemSelector: '.gallery-item',
	  percentPosition: true,
	  columnWidth: '.gallery-item',
	});
	
	// layout Masonry after each image loads
	$striped_grid.imagesLoaded().progress( function() {
	  $striped_grid.masonry();
	});  

	var $grid = $('.photolo-masonry').masonry({
	  itemSelector: '.gallery-grid-item',
	  percentPosition: true,
	  columnWidth: '.gallery-grid-item',
	});
	// layout Masonry after each image loads
	$grid.imagesLoaded().progress( function() {
	  $grid.masonry();
	});

	$('.navbar-toggler').click(function(){
      $(this).toggleClass('open');
    }); 
	
	// init Packery
	var $packery_grid = $('.packery-grid .gallery').packery({
	  // options
	  itemSelector: '.gallery-item',
	  percentPosition: true,
	});

	// layout Packery after each image loads
	$packery_grid.imagesLoaded().progress( function() {
	  $packery_grid.packery();
	});

	// init Packery
	var $packery_grid1 = $('.packery').packery({
	  // options
	  itemSelector: '.gallery-grid-item',
	  percentPosition: true,
	});

	// layout Packery after each image loads
	$packery_grid1.imagesLoaded().progress( function() {
	  $packery_grid1.packery();
	});

	// fancybox add next, pre arrow and caption for each gallery
	$('.gallery-icon a[href$=".gif"],.gallery-icon a[href$=".jpg"],.gallery-icon a[href$=".png"],.gallery-icon a[href$=".bmp"]').attr('data-fancybox', 'images'); // all links starting with http wil get rel attribute

	$('.gallery-icon a[href$=".gif"],.gallery-icon a[href$=".jpg"],.gallery-icon a[href$=".png"],.gallery-icon a[href$=".bmp"]').fancybox({
	    afterLoad : function(instance, current) {
	        var pixelRatio = window.devicePixelRatio || 1;

	        if ( pixelRatio > 1.5 ) {
	            current.width  = current.width  / pixelRatio;
	            current.height = current.height / pixelRatio;
	        }
	    }
	});

	$( ".gallery-item" ).each(function() {
	  var caption = $(this).find('.gallery-caption').text();
	  $(this).find('a').attr('data-caption', caption); // all links starting with http wil get rel attribute
	  // console.log(caption);
	});

	$('.full-grid-slider .gallery').bxSlider({
	    mode: 'fade',
		auto: true,
		autoControls: false,
		stopAutoOnClick: true,
		pager: false,
	  });

})(jQuery);