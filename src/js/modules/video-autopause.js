//----------------------------------*\
// Pause video when out of view
//----------------------------------*\

var inView = require('in-view');

module.exports = function(element,options){

    elements = document.querySelectorAll(element);

    // Check for target element
    if( elements == null ) return;

    inView(element)
    .on('enter', function(el) {
      el.play();
    })
    .on('exit', function(el) {
      el.pause();
    });

};
