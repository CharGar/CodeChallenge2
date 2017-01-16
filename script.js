$(document).ready(function(){
  $('.color-button').click(function(){
    var color = $(this).data('color');
  $('.container').append('<div class="color-cube '+color+'"></div>');
  console.log('click');
  var i = $('#'+color).text();
  i = Number(i);
  i += 1;
  $('#'+color).text(i);
  })
  });
