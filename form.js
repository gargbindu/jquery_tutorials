$(document).ready(function(){

  $('#submit_button').click(function(event){
    event.preventDefault();
    var username = $('#username').val();
    var email = $('#email').val();

    var output = `Hi I am ${username}, this is my email address ${email}`;
    $('#form_output').append(output);
  });

  $('#reset').click(function(){
    $('#form_output').empty();
  });
});