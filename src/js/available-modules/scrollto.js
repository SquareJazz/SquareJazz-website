//----------------------------------*\
// Scroll to
//----------------------------------*\

var scrollto = require('../functions/scrollanimate.js');

module.exports = function(element,options){

    element = document.querySelectorAll(element);

    // Check for target element
    if( element == null ) return;

    for(i = 0; i < element.length;i++) {
      element[i].onclick = function(e){
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('data-target'));
        var duration = parseInt(this.getAttribute('data-duration')) || 600;
        var offset = target.getBoundingClientRect().top + document.body.scrollTop;
        var scrollElement = (document.documentElement && document.documentElement.scrollTop) ? document.documentElement : document.body;
        scrollto(scrollElement, offset+2, duration);
        if(document.querySelector('.nav-check').checked){
          document.querySelector('.nav-check').checked = false;
        }
      };
    }

};
