$(document).ready(function() {

  /* var activeColor = 'white';

  $('#red').on('click', function() {
      activeColor = 'red';
  });

  $('#green').on('click', function() {
      activeColor = 'green';
  });

  $('#blue').on('click', function() {
      activeColor = 'blue';
  });

  $('#yellow').on('click', function() {
      activeColor = 'yellow';
  });

  $('#white').on('click', function() {
      activeColor = 'white';
  });

  $('#reset').on('click', function() {
      $('.box').css('background-color', 'black');
      activeColor = 'white';
  });

  $('.box').dblclick(function() {
    $(this).css('background-color', 'black');
  })

  $('.box').on('click', function() {
    /* alert('bro stop clicking'); */
	/*  $('.box').css('background-color', 'white');  // Change color to white */
  //	   $(this).css('background-color', activeColor);  // Change color to white

  var activeColor = 'white';
  var colors = 'yellow white red green blue black';

  $('#red').on('click', function() {
      activeColor = 'red';
  });

  $('#green').on('click', function() {
      activeColor = 'green';
  });

  $('#blue').on('click', function() {
      activeColor = 'blue';
  });

  $('#yellow').on('click', function() {
      activeColor = 'yellow';
  });

  $('#white').on('click', function() {
      activeColor = 'white';
  });

  $('.box').on('click', function() {
    $(this).removeClass(colors);
    $(this).addClass(activeColor);
  });

  $('.box').dblclick(function() {
    $(this).removeClass(colors);
  })

  $('#reset').on('click', function() {
      $('.box').removeClass(colors);
      activeColor = 'white';
  });

});
