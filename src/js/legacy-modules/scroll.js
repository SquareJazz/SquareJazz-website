//----------------------------------*\
// Scroll to element
*/
/*
  Depends on: jquery, jquery-smooth-scroll
*/

(function($) {

  $(function(){
    new scrollbutton( $('.js-scroll'), {
      speed: 'auto'
    });
  });

  scrollbutton.prototype.init = function(){

      // Check for target element
      if( !this.el.length ) return;

      // Get scroll target
      var target = $(this.el).attr('data-target') || $(this.el);
      var below = $(this.el).attr('data-below') || false;

      var offset = below ? target.outerHeight() + 1 : 0;

      $(this.el).click(function(){
        this.click(target,offset);
      }.bind(this));

  };

  scrollbutton.prototype.click = function(target, offset){
    $.smoothScroll({
      scrollTarget: $(target),
      offset: offset,
      speed: (this.options.speed || 'auto')
    });
    return false;
  };

  function scrollbutton( el, options ) {
    this.el = el;
    this.options = options;
    this.init();
  }

})(jQuery);
