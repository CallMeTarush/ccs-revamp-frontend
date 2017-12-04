$(document).ready(function() {

  console.log(document.cookie);
  if(document.cookie = "") {
    window.location = "/login";
  }
   
  $.get("demo_test.asp", function(data, status){
      
    $("#user.name").html(data.message);
  
  });
  $("#logout").click(function () {
    document.cookie = "";
    window.location = "/login";

  });
});


// Set the date we're counting down to
var countDownDate = new Date("Dec 7, 2017 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + " days <span class='lap-show'>:</span><br class='br-mob'> " + hours + " hr <span class='lap-show'>:</span><br class='br-mob'> " + minutes + " min <span class='lap-show'>:</span><br class='br-mob'> " + seconds + " sec ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.cookie = "";
    window.location = "/";
  }
}, 1000);


 var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

