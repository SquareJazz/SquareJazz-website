//----------------------------------*\
// Toggle navigation
*/
/*
  Depends on: jquery

  Usage:

  new nav( $('.target-element'), {
    toggleButton: 'js-nav-toggle',
    clsNavOpen: 'js-open',
    clsNavClosed: 'js-closed',
    clsBodyOpen: 'js-nav-open',
    clsBodyClosed: 'js-nav-closed'
  });

*/
var navigation;

(function($) {

  $(function(){
    navigation = new nav( $('.js-nav'), {});
  });

  nav.prototype.init = function(){

      // Check for target element
      if( !this.el.length ) return;

      this.active = false;

      this.toggleButton = this.options.toggleButton || '.js-nav-toggle';
      this.options.clsNavOpen = this.options.clsNavOpen || 'js-open';
      this.options.clsBodyOpen = this.options.clsBodyOpen || 'js-nav-open';

      this.setHeight();
      $(window).resize(function(){
        this.setHeight();
      }.bind(this));

      $(this.toggleButton).click(function(){
        this.toggle();
      }.bind(this));

  };

  nav.prototype.toggle = function(){

    this.el.toggleClass(this.options.clsNavOpen);
    $('body').toggleClass(this.options.clsBodyOpen);

    this.active = !this.active;

    return false;
  };

  nav.prototype.setHeight = function(){

    if(this.desktop === undefined){
      if($(window).innerWidth() < 900){
        this.desktop = true;
      }
      else {
        this.desktop = false;
      }
    }

    if($(window).innerWidth() < 900 && this.desktop === true){
      $(this.el).css('height',$(window).innerHeight()+'px');
      this.desktop = false;
    }
    else if ($(window).innerWidth() >= 900 && this.desktop === false) {
      $(this.el).css('height',$('.header').height());
      this.desktop = true;
    }
  };

  function nav( el, options ) {
    this.el = el;
    this.options = options;
    this.init();
  }

})(jQuery);
