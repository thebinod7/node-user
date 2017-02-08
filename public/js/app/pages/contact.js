$(document).ready(function(){
    if(sessionMgr.get('is_secure') == true){
        userDetails();
    }
    else {
        $('#name').val('');
        $('#email').val('');
        $('#query').val('');
    }

  $("#btnSendEmail").click(function(){
            var name=$('#name').val();
            var email=$('#email').val();
            var msg=$('#query').val();
            if(name.length == 0 || email.length == 0 || msg.length == 0){
                $('#info').html('<p class="text-danger"><strong>All fields are required, please fill the form correctly!!!</strong></p>');
                return ;
            }
            else {
                var data = {
                    name:name,
                    email:email,
                    message:msg
                };
                $("#btnSendEmail").html('Sending Email...');
                api.misc.contact({
                    data: data,
                    success: function (data) {
                        if(data.accepted!=null){
                            $('#info').html('<p class="text-success"><strong>Thank you for your email, Please keep in touch.</strong></p>');
                            $("#btnSendEmail").html('Submit');
                            resetForm();
                        }
                        else {
                            $( "#msg" ).html( '<p class="text-danger"><strong>Oops error occured. Please try again!!!</strong></p>' );
                            $("#btnSendEmail").html('Submit');
                        }
                    },
                    error :function () {
                        $( "#msg" ).html( '<p class="text-danger"><strong>Oops error occured. Please try again!!!</strong></p>' );
                        $("#btnSendEmail").html('Submit');
                    }
                });
            }
        });
});

function resetForm() {
    $('#name').val(' ');
    $('#email').val(' ');
    $('#query').val(' ');
}

function  userDetails() {
    var data = {
        is_secure : sessionMgr.get('is_secure')
    };
    api.user.get_profile({
        success: function (data) {
            $('#email').val(data.username);
            $('#name').val(data.name_parts.first_name + ' ' + data.name_parts.last_name);
        }
    });
}
