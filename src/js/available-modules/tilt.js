//----------------------------------*\
// Tilt hover effect
//----------------------------------*\

module.exports = function(element){

    this.timeout = false;
    this.active = false;
    this.element = element;
    if( this.element == null ) return;

    this.element.onmouseenter = function(e){

      if(!this.active){
        this.active = true;
        mod.bind(element);
      }
    };

    this.element.onmouseleave = function(e){

      if(this.active){
        this.active = false;
        mod.unbind(element);
      }
    };

};

var mod = {};

mod.bind = function(element){

  this.timeout = setTimeout(function(){
    element.style.transition = "none";
  },360);

  document.onmousemove = function(e){

    var rect = element.getBoundingClientRect();
    var position = {
      y: rect.top + (document.documentElement.scrollTop || document.body.scrollTop),
      x: rect.left,
      w: element.offsetWidth,
      h: element.offsetHeight
    };

    window.requestAnimationFrame(function(){
      mod.animate(e,position,element);
    });
  }
}

mod.unbind = function(element){

  element.style.transition = "";

  if(!!this.timeout){
    clearTimeout(this.timeout);
  }

  document.onmousemove = false;
}

mod.animate = function(e,position,el){

  var offsetX = ((e.pageX - position.x - (position.w / 2)) / position.w) * -5;
  var offsetY = ((e.pageY - position.y - (position.h / 2)) / position.h) * 6;

  el.style.transform = "rotateX("+offsetY+"deg) rotateY("+offsetX+"deg) scaleY(1) scaleX(1)";
};
