var $ = require('jquery');

$('#submit-form').click(function(){
  var message = $('#message').val();
  var email = $('#email').val();
  var name = $('#name').val();

  console.log('submit form', email, name, message);

});

