(function ($j) {

	Images = Class.extend({

		settings: {
			slctrImageLoaded: '.js-img-loaded',
			slctrSvgImage: '.js-svg'
		},

		init: function () {
			
      // Bind app settings
      this.app = new App();
      
      // Fallback for SVGs			
			this.svgFallback();
			
			// Add class to loaded images
			this.imageLoaded();

    },
    
    imageLoaded: function() {
      
      // Bind container and bail out if nothing
      $container = $j(this.settings.slctrImageTransition);
      if ($container.length < 1) return;          
            
      // Add class to images when loaded
      $container.imagesLoaded().progress( $j.proxy( function(instance, image) {

        // var result = image.isLoaded ? 'loaded' : 'broken';
        $j(image.img).addClass(this.app.clsLoaded);
        
      }, this));   
      
    },
    
    svgFallback: function() {
                  
      if ( !Modernizr.svg ) { // Check if browser has SVG support
        
        // Bind container and bail out if nothing
        $container = $j(this.settings.slctrSvgImage);
        if ($container.length < 1) return;          
      
        // Swap out inline svg images for pngs 
        // N.B. png and svg images will need ot have the same name and live in the same folder
        $container.attr('src', function () {
          return $(this).attr('src').replace('.svg', '.png');
        });
        
      }

    }       
    
	});

	$j().ready(function () {
		var images = new Images();
	});

})(window.jQuery);