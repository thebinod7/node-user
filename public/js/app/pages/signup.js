$(document).ready(function() {
    $('#btnSignup').on("click", function () {
        var fname = $('#firstName').val();
        var lname = $('#lastName').val();
        var email = $('#email').val();
        var pass =  $('#password').val();
        if(fname == '' || lname == '' || email == '' || pass == ''){
            $( "#msg" ).html( '<p class="text-danger"><strong>All fields are required. Please enter valid data.</strong></p>' );
            return;
        }
        else {
            var data = {
                firstName: $('#firstName').val(),
                lastName: $('#lastName').val(),
                email: $('#email').val(),
                password: $('#password').val()
            };
            $.ajax({
                method: 'POST',
                data: data,
                url: 'user/create',
                success: function (data) {
                    console.log(data.result.message);
                    if(data.result._id != null){
                        location.replace('/login');
                    }
                    else {
                        $( "#msg" ).html( '<p class="text-danger"><strong>'+ data.result.message +'</strong></p>' );
                    }
                },
                error: function(err) {
                    $( "#msg" ).html( '<p class="text-danger"><strong>Oops error occured, please try again.</strong></p>' );
                }
            });
        }
    });
});