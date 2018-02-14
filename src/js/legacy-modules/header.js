(function ($j) {

	Header = Class.extend({

    settings: {    
      container: '.js-headroom'
    },

    init: function () {
    
      // Bind container and bail out if nothing
      this.$container = $j(this.settings.container);
      if (this.$container.length < 1) return;
      
      // Bind app settings
      this.app = new App();    
      
      // Bind the site header 
      this.$header = $j(this.app.slctrHeader);
      
      // Get header height      
      var headerHeight = this.$header.outerHeight();

      // Initialise headroom and set header height as offset
      this.$container.headroom({
        offset : headerHeight
      });
    
    }  

  });

  $j().ready(function () {
    var header = new Header();
  });

})(window.jQuery);