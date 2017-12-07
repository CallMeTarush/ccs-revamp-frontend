$(document).ready(function () {
  displayUsers();

    
});

function displayUsers()
{
  
  for (i = 0; i < users.length; i++) {
                  if(window.location == "https://ccs.csivit.com/usertests/technical")
                  { 
                           document.getElementById("user").innerHTML += "<tr><a href='/evaluate/'" + users[i].regno + "/technical><td>" + users[i].regno + "</td><td>" + users[i].name + "</td><td>" + users[i].phone + "</td><td>" + users[i].isEvaluated +"</td></a></tr>"; 
 
                 }
                  else if(window.location == "https://ccs.csivit.com/usertests/management")
                  { 
                           document.getElementById("user").innerHTML += "<tr><a href='/evaluate/'" + users[i].regno + "/management><td>" + users[i].regno + "</td><td>" + users[i].name + "</td><td>" + users[i].phone + "</td><td>" + users[i].isEvaluated +"</td></a></tr>"; 
 
                  }
                  else if(window.location == "https://ccs.csivit.com/usertests/design")
                  { 

       document.getElementById("user").innerHTML += "<tr><a href='/evaluate/'" + users[i].regno + "/design><td>" + users[i].regno + "</td><td>" + users[i].name + "</td><td>" + users[i].phone + "</td><td>" + users[i].isEvaluated +"</td></a></tr>"; 
 
                  }
                  else if(window.location == "https://ccs.csivit.com/usertests/advtechnical")
                  { 
       document.getElementById("user").innerHTML += "<tr><a href='/evaluate/'" + users[i].regno + "/advtechnical><td>" + users[i].regno + "</td><td>" + users[i].name + "</td><td>" + users[i].phone + "</td><td>" + users[i].isEvaluated +"</td></a></tr>"; 
 
                  }
          }

}



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

