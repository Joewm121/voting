$(document).ready(function() {
  var age = parseInt(prompt("Give me your age sonny"));

  if (age >= 18) {
    $('#olds').show();
    } else {
    $('#minor').show();
    }
  });
