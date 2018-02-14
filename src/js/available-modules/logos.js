//----------------------------------*\
// Add logo carousel
//----------------------------------*\

var Flickity = require('flickity');

module.exports = function(element,options){

    this.element = document.querySelector(element);

    // Check for target element
    if( this.element == null ) return;

    var flick = new Flickity( element, {
        prevNextButtons: true,
        pageDots: false,
        cellAlign: 'left',
        setGallerySize: false,
        wrapAround: true,
        arrowShape: {
          x0: 20,
          x1: 70, y1: 40,
          x2: 70, y2: 40,
          x3: 70
        }
    });


};
