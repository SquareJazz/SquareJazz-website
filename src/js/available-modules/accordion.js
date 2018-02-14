//----------------------------------*\
// Accordion
//----------------------------------*\

module.exports = function(element,options){

    this.element = document.querySelectorAll(element);

    // Check for target element
    if( this.element == null ) return;

    [].forEach.call(this.element,function(btn){
      btn.addEventListener('click',function(e){
        e.preventDefault();
        var btn = e.currentTarget;

        btn.parentNode.parentNode.classList.toggle('active');
      })
    });

};
