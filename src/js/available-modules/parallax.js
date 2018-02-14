//----------------------------------*\
// Parallax
//----------------------------------*\

var parallax = module.exports = function(element,options){

    this.container = document.querySelector(element);
    this.items = [];

    // Check for target element
    if( this.container == null ) return;

    // Create item objects
    var elements = this.container.querySelectorAll(options.selector);
    [].forEach.call(elements, function(element){
      this.items.push(new item(element));
    }.bind(this));

    this.setBoundry();
    window.resize = function() {
      this.setBoundry();
      return;
    }.bind(this);

    window.onscroll = function() {
      this.scroll();
    }.bind(this);
};

parallax.prototype.setBoundry = function(){
  this.boundry = this.container.getBoundingClientRect().top + this.container.offsetHeight;
  return;
}

parallax.prototype.scroll = function(){
  var scrollY = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
  if(scrollY < this.boundry){
    window.requestAnimationFrame(function(){
      scrollY = Number.isInteger(scrollY) ? scrollY : 0;

      this.items.forEach(function(item){
        item.update(scrollY);
      });
    }.bind(this));
  }
}

var item = function(element){

  this.el = element;
  this.el.classList.add('is-animated');

  this.size = element.offsetWidth;

  var distance = this.el.classList.contains('distance-modifier') ? -0.08 : 0.010;
  this.multiplier = (this.size * (distance / 100));
  return;

};

item.prototype.update = function(scrollY){

  var offset = (0 - scrollY) * this.multiplier + "px";
  this.el.style.transform = "translate3d(0, " + offset + ", 0)";
  return;

};
