$(document).ready(function () {
  if(data.design =="true") {
     document.getElementById("design").style.cursor = "not-allowed";
     document.getElementById("design").style.opacity = "0.6";
  }
  if(data.technical =="true") {
    document.getElementById("technical").style.cursor = "not-allowed";
    document.getElementById("technical").style.opacity = "0.6";
  }
  if(data.management =="true") {
    document.getElementById("management").style.cursor = "not-allowed";
    document.getElementById("management").style.opacity = "0.6";
  }
});

document.getElementById("design").onclick = function() {
  if(data.design == "true") {
    ;
  }
  else {
    window.location = "/startexam/design";
  }
};
document.getElementById("technical").onclick = function() {
  if(data.technical == "true") {
    ;
  }
  else {
    window.location = "/startexam/design";
  }
};
document.getElementById("management").onclick = function() {
  if(data.management == "true") {
    ;
  }
  else {
    window.location = "/startexam/design";
  }
};

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

