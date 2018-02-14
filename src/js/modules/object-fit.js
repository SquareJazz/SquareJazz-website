//----------------------------------*\
// Object-fit polyfill
//----------------------------------*\

module.exports = function(element,options){

    this.element = document.querySelectorAll(element);

    // Check for target element
    if( this.element == null ) return;

    if('objectFit' in document.documentElement.style === false){

      for(var i=0, el; el = this.element[i]; i++) {
        var imgUrl = el.querySelector('picture img').currentSrc ||  el.querySelector('picture img').src;
        el.style.backgroundImage = 'url(' + imgUrl + ')';
        el.classList.add('is-fallback');
      }

    }

};
