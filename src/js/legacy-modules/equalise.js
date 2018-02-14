(function ($j) {

  Equalize = Class.extend({

    settings: {
      container: '.js-equalize',
      slctrEqualizeAll: '.js-equalize-all',
      slctrEqualizeMobile: '.js-equalize-mobile',
      slctrEqualizeTabletUp: '.js-equalize-tablet-up',
      slctrEqualizeDesktopUp: '.js-equalize-desktop-up',      
      slctrEqualizeWidth: '.js-equalize-width'
    },
    
    init: function () {
      
      // Bind container and bail out if nothing
      this.$container = $j(this.settings.container);
      if (this.$container.length < 1) return;      
      
      // Bind app settings
      this.app = new App();

      // Equalise content when images are loaded
      imagesLoaded( 'body', $j.proxy(function() {
        this.equalizeContent(false);
      }, this));
      
      // Equalise content on window re-size
      $j(window).resize($j.throttle($j.proxy(function () {
        this.equalizeContent(true);
      }, this), this.app.throttleDelay));
      
    },   
    
    equalizeContent: function (reset) {

      var windowWidth = $j(window).width();
      
      // Equalize on all devices / screens

      if (reset) {
        $el = $j(this.settings.slctrEqualizeAll, this.$container);
        this.equalizeReset($el);
      }      
      
			this.$container.equalize({
				equalize: 'outerHeight',
				children: this.settings.slctrEqualizeAll
			});      
      

      // Equalize on Mobile

      if (reset) {
        $el = $j(this.settings.slctrEqualizeMobile, this.$container);
        this.equalizeReset($el);
      }  
      
      if (windowWidth <= this.app.mobileMaxWidth) {
        
        this.$container.equalize({
          equalize: 'outerHeight',
          children: this.settings.slctrEqualizeMobile
        });
        
      }
      
      // Equalize on Tablet and Up

      if (reset) {
        $el = $j(this.settings.slctrEqualizeTabletUp, this.$container);
        this.equalizeReset($el);
      }           
      
      if (windowWidth > this.app.mobileMaxWidth) {
        
        this.$container.equalize({
          equalize: 'outerHeight',
          children: this.settings.slctrEqualizeTabletUp
        });
        
      }
      
      // Equalize on Desktop and Up

      if (reset) {
        $el = $j(this.settings.slctrEqualizeDesktopUp, this.$container);
        this.equalizeReset($el);
      }           
      
      if (windowWidth > this.app.tabletMaxWidth) {
        
        this.$container.equalize({
          equalize: 'outerHeight',
          children: this.settings.slctrEqualizeDesktopUp
        });
        
      }      
      
      
      // Equalize width on Tablet and Up
      
      if (reset) {
        $el = $j(this.settings.slctrEqualizeWidth, this.$container);
        this.equalizeReset($el);
      }           
      
      if (windowWidth > this.app.mobileMaxWidth) {
        
        this.$container.equalize({
          equalize: 'width',
          children: this.settings.slctrEqualizeWidth
        });
        
      }      
      
    },
        
    equalizeReset: function(el) {
      
      el.css({ 'height': 'auto' });
      
    }

  });
  
  $j().ready(function () {
    var equalize = new Equalize();
  });
  

})(window.jQuery);