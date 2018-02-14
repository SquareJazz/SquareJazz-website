//----------------------------------*\
// Preload images
//----------------------------------*\

var imagesLoaded = require('imagesloaded');

module.exports = function(element,options){

    this.element = document.querySelectorAll(element);

    // Check for target element
    if( this.element == null ) return;

    var imgLoad = imagesLoaded(this.element);
    imgLoad.on('progress',function(instance){
      instance.images.forEach(function(im){
        if(im.isLoaded && !im.img.classList.contains('loaded') && im.img.parentElement !== undefined){
          im.img.parentElement.classList.add('loaded');
        }
      });
    });
};
