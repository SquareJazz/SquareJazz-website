//----------------------------------*\
// Form validation
*/
/*
  Depends on: jquery, jquery-validation
*/

(function($) {

  $(function(){
    new form( $('.js-form'), {});
  });

  form.prototype.init = function(){

      // Check for target element
      if( !this.el.length ) return;

      // Validate forms
      this.validate();

  };

  form.prototype.validate = function(){

    $(this.el).validate({submitHandler:function(){

      var fields = {
        'name' : $('#enq-name').val(),
        'email' : $('#enq-email').val(),
        'phone' : $('#enq-phone').val(),
        'message' : $('#enq-message').val(),
        'submitted' : 'true',
        'blank_input' : $('#enq-dob').val()
      };

      $(this.el).find('#enq_submit').attr('disabled','disabled');

      $.ajax({
        type 		: 'POST',
        url 		: $(this.el).attr('action'),
        data 		: fields,
        dataType 	: 'json',
      })
      .done(function(data) {
        var json = $.parseJSON(data);
        if(json.result == 'success'){
          $(this.el).addClass('js-success');
        }
      }.bind(this));

      return false;

    }.bind(this)});

  };

  function form( el, options ) {
    this.el = el;
    this.options = options;
    this.init();
  }

})(jQuery);
