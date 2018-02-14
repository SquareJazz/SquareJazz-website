//----------------------------------*\
// Inview
//----------------------------------*\
var inView = require('in-view');

module.exports = function(selector, options){

    elements = document.querySelectorAll(selector);

    // Check for target element
    if( elements == null ) return;

    inView.offset(10);

    inView(selector)
    .on('enter', function(el) {
      el.setAttribute('data-js-inview', true);
    })
    .on('exit', function(el) {
      //el.setAttribute('data-js-inview', false);
    });
};
