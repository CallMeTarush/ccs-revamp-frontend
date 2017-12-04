$(document).ready(function () {

    $("#login").click(function () {

                
                 $("#message").html('');
                 var user = new Object();

                 user.regno = $('#regno').val();
                 user.password = $('#password').val();

                 $.ajax({

                     url: 'https://ccs.csivit.com/authenticate',

                     type: 'POST',

                     dataType: 'json',

                     data: user,

                     success: function (data, textStatus, xhr) {

                        console.log(data);
                        if(data.message == "You have not registered for CSI-VIT CCS.")
                        {
                          ;
                        }
                        else {
                          window.location = "https://ccs.csivit.com/dashboard-timer";
                        }
                     },

                     error: function (xhr, textStatus, errorThrown) {

                        console.log(data);
                        console.log('Error in Operation');

                        $("#message").html(data.message);
                      }
        });
    });
});

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

