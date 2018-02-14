(function ($j) {

	Accordion = Class.extend({
		
		settings: {
			container: '.js-accordion',
			clsActive: 'active',
			slctrSybmol: '.js-symbol',
			txtClose: '&ndash;',
			txtOpen: '&#43;',
			txtOpenHex: '\u002B',
			scrollSpeed: 600						
		},

		init: function () {
		
			// Bind container and bail out if nothing
			this.$container = $j(this.settings.container);
			if (this.$container.length < 1) return;
			
      // Bind global app settings
      this.app = new App();
      
      // Call scroll functions
      this.scrollOffset();			
			
			// Perform accordion on click
			$j('dt', this.$container).on('click', $j.proxy(function (e) {
        this.initAccordion(e);
			}, this));			
			
		},
		
    scrollOffset: function() {
      
      // Calculate scroll offset
      this.$offset = $j(this.app.scrollOffset);      
      this.scrollOffset = this.$offset.outerHeight() * -1;

      // Re-calculate scroll offset on window re-size
      $(window).resize($.throttle($j.proxy(function () {
        this.scrollOffset = this.$offset.outerHeight() * -1;
      }, this), this.app.throttleDelay));    
      
    },

		initAccordion: function (e) {
  
      e.preventDefault();
	
			var 
			currentText,
			updateText;
			
			// Bind target objects
			$targetTitle = $j(e.currentTarget);
			$targetData =  $targetTitle.next('dd');
      $targetSymbol = $targetTitle.children(this.settings.slctrSymbol);

      // Toggle active class
      $targetTitle.toggleClass(this.settings.clsActive);
      $targetData.toggleClass(this.settings.clsActive);
      
      // Update Symbol
      currentText = $targetSymbol.html();
      updateText = (currentText == this.settings.txtOpenHex) ? this.settings.txtClose : this.settings.txtOpen;
      $targetSymbol.html(updateText);    
      
      // Scroll to target that has opened
      if ($targetTitle.hasClass(this.settings.clsActive)) {
        $j.smoothScroll({
          offset: this.scrollOffset,
          scrollTarget: $targetTitle,
          speed: this.settings.scrollSpeed              
        });
      }
			
		},

	});

	$j().ready(function () {
		var accordion = new Accordion();
	});

})(window.jQuery);