//----------------------------------*\
// Form dropdown updater
//----------------------------------*\

var selects = {};
var settings;

module.exports = function(element, options){

  settings = options;

  elements = document.querySelectorAll(element);

  // Check for target element
  if( elements == null ) return;

  [].forEach.call(elements, function(element){
    selects[element.getAttribute('data-js-form-select')] = new select(element);
  });

};

var select = function(element) {

  this.el = element;
  this.label = this.el.querySelector('[' + settings.labelAttr + ']');
  this.labelText = this.label.getAttribute('data-js-select-label');
  this.select = this.el.querySelector('select');

  this.select.addEventListener('change', function(e){
    this.setValue(e.currentTarget.value);
  }.bind(this));

}

select.prototype.setValue = function(label, value){
  this.label.innerHTML = label;
  this.el.setAttribute('data-js-select', "active");
}

select.prototype.clear = function(){
  this.label.innerHTML = this.labelText;
  this.select.value = false;
  this.el.setAttribute('data-js-select', "inactive");
}
