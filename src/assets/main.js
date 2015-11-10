// load theme ASAP
$().bootstrapThemeSwitcher('loadThemeFromCookie');

// document ready
$(function() {

  // load theme selector
  $('#themeswitch').bootstrapThemeSwitcher({localFeed: 'assets/css/themes.json'});

$.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

$('form').validate({
    rules: {
        firstname: {
            minlength: 3,
            maxlength: 15,
            required: true
        },
        lastname: {
            minlength: 3,
            maxlength: 15,
            required: true
        },
        email:{
           required: true,
           email: true 
        }
      }
    });

$('#json').click(function(){


var root = 'http://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/posts',
  method: 'GET'
}).then(function(data) {
  for (var i = 0; i < data.length; i++) {
    var  id = data[i].id;
    var title =  data[i].title;
    var body = data[i].body;
    var html = "<div><b>Nummer " + id + ": " + title + "</b><br/><p>" + body + "</p></div>";
    $(html).hide().appendTo("#posts").fadeIn(1000);
}
});

});
});