$(document).ready(function () {
  displayUsers();
  $('#user').tablesort()

  $('#user').find('tr').click( function(){

    if(users[$(this).index()].isEvaluated) {
      alert("Evaluated!");
    }
    else {
      if(window.location == "https://ccs.csivit.com/usertests/technical")
      { 

        window.location = "/evaluate/" + users[$(this).index()].regno + "/technical";
      }
      else if(window.location == "https://ccs.csivit.com/usertests/management")
      { 

        window.location = "/evaluate/" + users[$(this).index()].regno + "/management";
      }
      else if(window.location == "https://ccs.csivit.com/usertests/design")
      { 

        window.location = "/evaluate/" + users[$(this).index()].regno + "/design";
      }
      
    }
  });
});

function displayUsers()
{
  
  for (i = 0; i < users.length; i++) {
    document.getElementById("user").innerHTML += "<tr><td>" + users[i].regno + "</td><td>" + users[i].name + "</td><td>" + users[i].phone + "</td><td>" + users[i].isEvaluated +"</td></tr>"; 
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

