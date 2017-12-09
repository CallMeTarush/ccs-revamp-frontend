$(document).ready(function () {
  
  if(data.design) {
     document.getElementById("design").style.cursor = "not-allowed";
     document.getElementById("design-img").src= "/assets/images/design-bw.png";
    }
  if(data.technical) {
    document.getElementById("technical").style.cursor = "not-allowed";
    document.getElementById("technical-img").src= "/assets/images/technicalbw.png";
  }
  if(data.management) {
    document.getElementById("management").style.cursor = "not-allowed";
    document.getElementById("management-img").src= "/assets/images/managementbw.png"; 
   }
  if(data.advtechnical) {
    document.getElementById("advtechnical").style.cursor = "not-allowed";
    document.getElementById("advtech-img").src= "/assets/images/advtech-bw.png"; 
  }
});
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
function logout() {
  window.location = "/logout";
}
function designClick() {
  if(data.design) {
    alert("Already attempted");
  }
  else {
    window.location = "/startexam/design";
  }
};
function technicalClick() {
  if(data.technical) {
    alert("Already attempted");
  }
  else {
    window.location = "/startexam/technical";
  }
};
function advTechClick() {
  if(data.advtechnical) {
    alert("Already attempted");
  }
  else {
    window.location = "/startexam/advtechnical";
  }
};
function managementClick() {
  if(data.management) {
    alert("Already attempted");
  }
  else {
    window.location = "/startexam/management";
  }
};

// Set the date we're counting down to
var countDownDate = new Date("Dec 10, 2017 02:00:00").getTime();

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
  hours += days*24;
  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = hours + " hr <span class='lap-show'>:</span><br class='br-mob'> " + minutes + " min <span class='lap-show'>:</span><br class='br-mob'> " + seconds + " sec ";
 // days + " days <span class='lap-show'>:</span><br class='br-mob'> " +
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.cookie = "";
    window.location = "/";
  }
}, 1000);


//Background
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

