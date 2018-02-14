(function ($j) {

	Carousel = Class.extend({

		settings: {
			container: '.js-carousel',
		},

		init: function () {
			
			this.carousel();
			
			this.carouselWithVideo();

    },

    carousel: function() {
      
      var container = '.js-carousel';
      
      // Bind container and bail out if nothing found
      $container = $j(container);
      if ($container.length < 1) return;
      
      $container.flexslider({
        animation: "slide",        
        controlNav: false,
        prevText: '<i class="glyphicon-direction-left"></i>',
        nextText: '<i class="glyphicon-direction-right"></i>',
      });

    },

    carouselWithVideo: function() {
    
      var container = '.js-carousel-video';
      
      // Bind container and bail out if nothing found
      $container = $j(container);
      if ($container.length < 1) return;
      
      $container.flexslider({
        animation: "slide",        
        controlNav: false,
        prevText: '<i class="glyphicon-direction-left"></i>',
        nextText: '<i class="glyphicon-direction-right"></i>',  
        smoothHeight: true                   
      });
    
    }

	});

	$j().ready(function () {
		var carousel = new Carousel();
	});

})(window.jQuery);