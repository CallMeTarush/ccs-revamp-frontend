$(document).ready(function () {
  
    
    $('#form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            password: {
                validators: {
                     stringLength: {
                        min: 8,
                        message: 'Password must be at least 8 characters long'
                    },
                    notEmpty: {
                        message: 'Please supply your password'
                    }
                }
            },
            confpassword: {
                validators: {
                    identical: {
                        field: 'password',
                        message: 'The passwords do not match.'
                        },
                    
                    notEmpty: {
                        message: 'This field can not be empty.'
                    }
                  }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

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

