//----------------------------------*\
// Add carousel
//----------------------------------*\

var Flickity = require('flickity');

module.exports = function(element,options){

    this.element = document.querySelector(element);

    // Check for target element
    if( this.element == null ) return;


    var flick = new Flickity( element, {
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        draggable: true,
        setGallerySize: false,
        adaptiveHeight: false,
        arrowShape: {
          x0: 10,
          x1: 60, y1: 50,
          x2: 65, y2: 45,
          x3: 20
        }
    });

    var videos = document.querySelectorAll(element + ' .video');

    [].forEach.call(videos,function(video){
      video.play();
    });

};
