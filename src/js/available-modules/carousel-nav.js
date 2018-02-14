//----------------------------------*\
// Add flickity nav element
//----------------------------------*\

var FlickityNav = require('flickity');
require('flickity-as-nav-for');

module.exports = function(element,options){

    this.element = document.querySelector(element);

    // Check for target element
    if( this.element == null ) return;


    var flick = new FlickityNav( element, {
        asNavFor: '.carousel',
        contain: true,
        prevNextButtons: true,
        pageDots: false,
        arrowShape: {
          x0: 10,
          x1: 60, y1: 50,
          x2: 65, y2: 45,
          x3: 20
        }
    });

};
