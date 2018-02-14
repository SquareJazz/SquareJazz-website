//----------------------------------*\
// Sticky nav (Reactive method)
*/
/*
  Depends on: jquery
*/

(function($) {

  $(function(){
    new stickynav( $('.js-sticky'), {
      clsTop: 'js--top',
      clsNotTop: 'js--not-top',
      clsVisible: 'js--visible',
      clsNotVisible: 'js--not-visible',
      throttleDuration: 10
    });
  });

  stickynav.prototype.init = function(){

      // Check for target element
      if( !this.el.length ) return;

      this.top = 0;

      // Set window-dependant variables
      this.setInitialVars();
      window.onresize = function(){
        this.setInitialVars();
      }.bind(this);

      // Bind scroll event
      this.scroll();
      window.onscroll = function(){
        if(navigation.active === undefined || (navigation.active !== undefined && navigation.active !== true)){
          this.scroll();
        }
      }.bind(this);

  };

  stickynav.prototype.setInitialVars = function(){

    this.wScrollBefore = 0;
    this.elHeight = $(this.el).outerHeight();
    this.dHeight = $(document).height();
    this.wHeight  = $(window).height();

  };

  stickynav.prototype.scroll = function(){

    var wScrollCurrent = $(window).scrollTop();
    var wScrollDiff  = this.wScrollBefore - wScrollCurrent;
    var elTop  = this.top + wScrollDiff;
    var offset;

    // scrolled to the very top; element sticks to the top
    if( wScrollCurrent <= 0 ){
      offset = 0;
      this.isTop(true);
    }
    // scrolled up; element slides in
    else if( wScrollDiff > 0 ){
      offset = elTop > 0 ? 0 : elTop;
      this.isVisible(true);
    }
    // scrolled down
    else if( wScrollDiff < 0 ) {

      // scrolled to the very bottom; element slides in
      if( wScrollCurrent + this.wHeight >= this.dHeight - this.elHeight ){
        offset = ( elTop = wScrollCurrent + this.wHeight - this.dHeight ) < 0 ? elTop : 0;
        this.isVisible(true);
      }
      // scrolled down; element slides out
      else {

        if(Math.abs( elTop ) > this.elHeight){
          offset = -this.elHeight;
          this.isVisible(false);
        }
        else {
          offset = elTop;
          this.isVisible(true);
        }

      }
    }

    if( wScrollCurrent > 0){
      this.isTop(false);
    }

    $(this.el).css( 'transform', 'translate3d(0,' + offset + 'px,0)' );
    this.top = offset;
    this.wScrollBefore = wScrollCurrent;

  };


  stickynav.prototype.isVisible = function(visible){

    if(visible && !$(this.el).hasClass(this.options.clsVisible)){
      $(this.el).removeClass(this.options.clsNotVisible).addClass(this.options.clsVisible);
    }
    else if (!visible && !$(this.el).hasClass(this.options.clsNotVisible)){
      $(this.el).removeClass(this.options.clsVisible).addClass(this.options.clsNotVisible);
    }

  };

  stickynav.prototype.isTop = function(top){

    if(top && !$(this.el).hasClass(this.options.clsTop)){
      $(this.el).removeClass(this.options.clsNotTop).addClass(this.options.clsTop);
    }
    else if (!top && !$(this.el).hasClass(this.options.clsNotTop)) {
      $(this.el).removeClass(this.options.clsTop).addClass(this.options.clsNotTop);
    }

  };

  function stickynav( el, options ) {
    this.el = el;
    this.options = options;
    this.init();
  }

})(jQuery);
