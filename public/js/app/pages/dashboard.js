$(document).ready(function() {
    var data = {
        user : sessionMgr.get('user'),
    };
    api.user.get_profile({
        success: function (data) {
            $('#username').val(data.username);
            $('#fname').val(data.name_parts.first_name);
            $('#lname').val(data.name_parts.last_name);
            $('#phone').val(data.phone);
            $('#user_fname').html(data.name_parts.first_name);
            $('.team-member-name > p').html(data.name_parts.first_name + ' ' + data.name_parts.last_name);
        }
    });

    $('#btnGetCode').on("click", function () {
       getCode();
    });

    $('#btnUpdate').on('click',function() {
       updateProfile();
    });
});

function getCode() {
    api.user.forgot({
        data: {email: $('#username').val()},
        success: function (data) {
            $('#lblMsg').html('<p class="text-success"><strong>Please check your email to change password</strong></p>');
        },
        error: function (d) {
            $('#message-text').html('Email not found');
        }
    });
}

function updateProfile() {
    var data = {
        email : $('#username').val(),
        name : $('#fname').val() + ' ' + $('#lname').val(),
        phone : $('#phone').val()
    };
    api.user.update_profile({
        data:data,
        success : function (data) {
            console.log('oeee');
            $('#msg').html('<p class="text-success"><strong>Profile updated successfully.</strong></p>');
        },
        error :function () {
            console.log('tait');
            $('#msg').html('<p class="text-danger"><strong>Oops, something went wrong!!!</strong></p>');
        }
    });
}