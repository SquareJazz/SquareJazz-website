//----------------------------------*\
// Nav JS
//----------------------------------*\

module.exports = function(element,options){

    element = document.querySelectorAll(element);

    // Check for target element
    if( element == null ) return;

    element[0].addEventListener('change',function(event){

      if(event.target.checked){
        document.body.classList.add('nav-active');
      }
      else{
        document.body.classList.remove('nav-active');
      }

    });
};
