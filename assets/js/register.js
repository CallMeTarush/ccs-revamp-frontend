$(document).ready(function () {

    $("#signup").click(function () {

                
    $("#message").html('');
                 var checker = $('#confpassword').val();
                 var user = new Object();
                 user.name = $('#name').val();
                 user.email = $('#email').val();
                 user.regno = $('#regno').val();
                 user.phone = $('#phone').val();
                 user.password = $('#password').val();
                 
                 if(checker==null || checker == "") {
                  console.log('Enter confirm password you noob');
                 }
                 else {
                 $.ajax({

                     url: 'https://ccs.csivit.com/signup',

                     type: 'POST',

                     dataType: 'json',

                     data: user,

                     success: function (data, textStatus, xhr) {

                         console.log(data);
                        $('form input').val("");
                        $('#message').html(data.message);
                        console.log(data.message);
                        if(data.message=="Successfully Registered") {
                          window.location = "/login";
                        }

                     },

                     error: function (xhr, textStatus, errorThrown) {

                         console.log('Error in Operation');

            }
        });
                }
    });
        $('#form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                        stringLength: {
                        min: 3,
                        message: 'Please enter valid name'
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+.[a-zA-Z]*2017@vitstudent\.ac\.in$/,
                        message: 'Please enter your VIT email id'
                    }
                }
            },
            regno: {
                validators: {
                    regexp: {
                        regexp: /^(1)(7)(.)(.)(.)(\d)(\d)(\d)(\d)$/,
                        message: 'Please enter a valid registration number'
                    },
                    notEmpty: {
                        message: 'Please enter registration number'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply a phone number'
                    },
                    regexp: {
                        regexp: /^[7-9][0-9]{9}$/,
                        message: 'Please enter a valid phone number'
                    }
                }
            },
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
