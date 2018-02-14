//SVG fallback
require('svg4everybody')();

require('./modules/buttons.js')('[data-js-btn]');

require('./modules/body-toggle.js')('[data-body-toggle]',{
  attribute: "data-body-toggle"
});

require('./modules/video-autopause.js')('[data-js-autopause]');
require('./modules/inview.js')('[data-js-inview]');

require('./modules/form-select.js')('[data-js-form-select]', {
  labelAttr: "data-js-select-label"
});


/*
require('./modules/lightbox.js')('.js-lightbox');



require('./modules/lazy-load.js')('.js-load-more');
require('./modules/object-fit.js')('.js-fit-picture');
*/
