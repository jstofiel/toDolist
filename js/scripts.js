//business logic







// user interface logic
$(document).ready(function() {
  $("form#toDoForm").submit(function(event) {
    event.preventDefault();
    var userInput = $('#toDoInput').val();
    $('#returnInput').append("<li><span class='delete'>" + userInput + "</span></li>");
    $('#toDoInput').val('');
    $('.delete').click(function() {
      $(this).remove();
    });
  });
});
