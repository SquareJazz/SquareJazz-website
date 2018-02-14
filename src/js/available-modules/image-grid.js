//----------------------------------*\
// Add packery
//----------------------------------*\

var Packery = require('packery');
var layzr = require('layzr.js')();

module.exports = function(element,options){

    this.element = document.querySelector(element);

    // Check for target element
    if( this.element == null ) return;


    var pckry = new Packery( element, {
      itemSelector: '.image',
      gutter: 0,
      percentPosition: true
    });

    setTimeout(function(){
      pckry.layout();
      layzr.update().check().handlers(true);
    },20);

};
