//----------------------------------*/
// Simple scroll effect
//----------------------------------*/

var m = {};

m.init = module.exports = function(element, options){

    m.element = document.querySelector(element);
    m.options = options;
    if( m.element == null ) return;

    m.scroll();
    window.onscroll = function(){
      var scrollTop = (document.documentElement.scrollTop || document.body.scrollTop);
      if(scrollTop < m.options.distance && scrollTop >= m.options.offset){
        m.scroll();
      }
    }.bind(this);

};

m.scroll = function(){
  var scrollTop = (document.documentElement.scrollTop || document.body.scrollTop) - m.options.offset;
  var opacity = (scrollTop / m.options.distance) * m.options.strength;

  m.element.style.transform = "translate3d(0, "+(opacity*100)+"px, 0)";
}
