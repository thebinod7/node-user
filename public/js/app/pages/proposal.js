$(document).ready(function() {
    if(sessionMgr.get('is_secure') == true){
        userDetails();
    }
    else {
        $('#full_name').val('');
        $('#email').val('');
        $('#course_name').val('');
        $('#course_desc').val('');
    }
    $( "#btnProposal" ).click(function() {
        var name = $('#full_name').val();
        var email = $('#email').val();
        var course = $('#course_name').val();
        var desc = $('#course_desc').val();
        if(name.length == 0 || email.length == 0 || course.length == 0 || desc.length == 0){
            $('#msg').html('<p class="text-danger"><strong>All fields are required. Please enter valid data.</strong></p>');
        }
        else {
            data = {
                name:name,
                email:email,
                course_name:course,
                course_desc:desc
            };
            $("#btnProposal").html('Sending proposal...');
            api.misc.proposal({
                data: data,
                success: function (data) {
                    if(data.accepted!=null){
                        $('#msg').html('<p class="text-success"><strong>Thank you for your proposal, Please keep in touch.</strong></p>');
                        $("#btnProposal").html('Submit');
                        resetForm();
                    }
                    else {
                        $( "#msg" ).html( '<p class="text-danger"><strong>Oops error occured. Please try again!!!</strong></p>' );
                        $("#btnProposal").html('Submit');
                    }
                },
                error :function () {
                    $( "#msg" ).html( '<p class="text-danger"><strong>Oops error occured. Please try again!!!</strong></p>' );
                    $("#btnProposal").html('Submit');
                }
            });
        }
    });
});

function  userDetails() {
    var data = {
        is_secure : sessionMgr.get('is_secure')
    };
    api.user.get_profile({
        success: function (data) {
            $('#email').val(data.username);
            $('#full_name').val(data.name_parts.first_name + ' ' + data.name_parts.last_name);
        }
    });
}


function resetForm() {
    $('#full_name').val(' ');
    $('#email').val(' ');
    $('#course_name').val(' ');
    $('#course_desc').val(' ');
}