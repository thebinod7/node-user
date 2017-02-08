$(document).ready(function() {
    $('#btnSignup').on("click", function () {
        if($("#check_terms").is(':not(:checked)'))
        {
            $( "#msg" ).html( '<p class="text-danger">Check terms and conditions of Edushala.</p>' );
            return;
        }
        var data = {
            name: $('#full_name').val(),
            email: $('#email').val(),
            password: $('#password').val()
        };
        api.user.signup({
            data: data,
            success: function (data) {
                if(data.user_uuid!=null){
                    $( "#btnUser" ).html( '<a href="/dashboard">Dashboard</a>' );
                    sessionMgr.set('isLoggedIn', true);
                    sessionMgr.set('user', data);
                    sessionMgr.makeSecure(true);
                    location.replace('/dashboard');
                }
                else {
                    $( "#msg" ).html( '<p class="text-danger"><strong>Email already exists</strong></p>' );
                }
            },
            error :function () {
                $( "#msg" ).html( '<p class="text-danger"><strong>Oops error occured. Please try again!!!</strong></p>' );
            }
        });
    });
});