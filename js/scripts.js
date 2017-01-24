//business logic







// user interface logic
$(document).ready(function() {
  $("form#toDoForm").submit(function(event) {
    event.preventDefault();
    var userInput = $('#toDoInput').val();
    $('#returnInput').append("<li>" + userInput + "</li>");
    $('#toDoInput').val('');
    $('li').click(function() {
      $(this).remove();
    });
  });
});
