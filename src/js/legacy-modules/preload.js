//----------------------------------*\
// Preload images
*/
/*
  Depends on: jquery
*/

(function($) {

  $(function(){
    new preload( $('.js-preload'), {
      loadedCls: 'js-loaded'
    });
  });

  preload.prototype.init = function(){

      // Check for target element
      if( !this.el.length ) return;

      var self = this;
      $('<img/>').attr('src',$(self.el).attr('data-image')).load(function() {
         $(this).remove();
         $(self.el).addClass(self.options.loadedCls);
       });

  };

  function preload( el, options ) {
    this.el = el;
    this.options = options;
    this.init();
  }

})(jQuery);
