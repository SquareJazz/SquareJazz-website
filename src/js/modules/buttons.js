//----------------------------------*\
// Form dropdown updater
//----------------------------------*\

var buttons = [];
var settings;

module.exports = function(element, options){

  settings = options;

  elements = document.querySelectorAll(element);

  // Check for target element
  if( elements == null ) return;

  [].forEach.call(elements, function(element){

    buttons.push(new button(element));

  });
};

var button = function(element) {

  this.el = element;

  this.el.addEventListener('mouseleave', function(event){
    event.preventDefault();

    this.el.setAttribute('data-js-btn-mouseoff', true);

    window.setTimeout(function(){
      this.el.setAttribute('data-js-btn-mouseoff', false);
    }.bind(this), 350);

  }.bind(this));

}
