(function ($j) {

	FullScreen = Class.extend({

    settings: {
      container: '.js-full-screen',
      maxHeight: '900',
      minHeight: '400'
    },

    init: function () {
    
      // Bind container and bail out if nothing
      this.$container = $j(this.settings.container);
      if (this.$container.length < 1) return;
      
      // Bind app settings
      this.app = new App();    
           
      // Get and Set height of the container
      var height = this.getHeight();
      this.setHeight(height);
      
      // On window resize, Get and Set height of the container
      $j(window).resize($j.throttle($j.proxy(function () {
        height = this.getHeight();
        this.setHeight(height); 
      }, this), this.app.throttleDelay));      
    
    },
    
    getHeight: function() {
      
      var windowHeight = $j(window).height();
      var offsetHeight = 105; // Offset height to show teaser of content below (could set this with data attribute?)

      var height = windowHeight - offsetHeight;

      if (height < this.settings.minHeight) {
        height = this.settings.minHeight;
      } else if (height > this.settings.maxHeight) {
        height = this.settings.maxHeight;
      }      

      return height;
      
    },
    
    setHeight: function(height) {
      
      this.$container.css({ 'height': height });   
      return false;   
      
    } 
    
  });

  $j().ready(function () {
    var fullScreen = new FullScreen();
  });

})(window.jQuery);