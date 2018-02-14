//----------------------------------*\
// Body toggle
//----------------------------------*\

module.exports = function(element,options){

    elements = document.querySelectorAll(element);

    // Check for target element
    if( elements == null ) return;

    [].forEach.call(elements, function(element){

      element.addEventListener('click',function(event){
        event.preventDefault();
        document.body.classList.toggle(event.currentTarget.getAttribute(options.attribute));
      });

    })

};
