$(document).ready(function () {

    $("#signup").click(function () {

                
		$("#message").html('');
                 var user = new Object();
                 user.name = $('#name').val();
                 user.email = $('#email').val();
                 user.regno = $('#regno').val();
                 user.phone = $('#phone').val();
                 user.password = $('#password').val();

                 $.ajax({

                     url: 'https://ccs.csivit.com/signup',

                     type: 'POST',

                     dataType: 'json',

                     data: user,

                     success: function (data, textStatus, xhr) {

                         console.log(data);
			$('form input').val("");
			$('#message').html(data.message);

                     },

                     error: function (xhr, textStatus, errorThrown) {

                         console.log('Error in Operation');

            }
        });
    });
        $('#form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
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
                        regexp: /^[a-z]+.[a-z]*2017@vitstudent\.ac\.in$/,
                        message: 'Please enter your VIT email id'
                    }
                }
            },
            regno: {
                validators: {
                    regexp: {
                        regexp: /^(1)(7)(.)(.)(.)(\d)(\d)(\d)(\d)$/,
                        message: 'Please enter a valid registration number'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    stringLength: {
                        min: 10,
                        max: 10,
                        message: 'Please enter a valid phone number'

                    }
                }
            },
            password: {
                validators: {
                     stringLength: {
                        min: 8,
                        message: 'Atleast 8 characters'
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
                        message: 'The password and its confirm are not the same'
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

