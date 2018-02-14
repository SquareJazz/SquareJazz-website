//----------------------------------*\
// Stick to bottom
//----------------------------------*\

var stickyButton = {};

stickyButton.init = function(selector,options){

    element = document.querySelectorAll(selector);

    // Check for target element
    if( element === null || element.length < 1 ) return;

    stickyButton.stickify(element[0]);
    window.onscroll = function(){
      stickyButton.stickify(element[0]);
    };

};

stickyButton.stickify = function(element){

  var parent = element.parentNode;
  var parentTop = parent.getBoundingClientRect().top + document.body.scrollTop - document.body.clientTop;
  var parentHeight = window.getComputedStyle(parent).height.replace('px','');

  if((window.innerHeight + window.pageYOffset) > (parentTop + parseInt(parentHeight))){
    element.classList.add('sticky');
    element.classList.remove('not-sticky');
  }
  else{
    element.classList.add('not-sticky');
    element.classList.remove('sticky');
  }

}


module.exports = stickyButton.init;
