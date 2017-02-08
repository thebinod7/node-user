$(document).ready(function(){
    api.sample.enroll({
        url_data: {
            class_uuid:'23423423'
        },
        success:function(data){
            console.log(data);
        },

        error: function(err){
            alert(err.message);
        }
    }),
        api.sample.get_sample({
            success:function(data){
                console.log(data);
            },

            error: function(err){
                alert(err.message);
            }
        })
});
