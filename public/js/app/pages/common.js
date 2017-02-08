$(document).ready(function() {
    var data = {
        is_secure : sessionMgr.get('is_secure'),
    };
    if(data.is_secure == true){
        $( "#user_dashboard" ).html( '<a href="/dashboard">Dashboard</a>' );
    }
    $( "#btnSubscribe" ).click(function() {
        var email = $('#email_address').val();
       if(!validEmail(email)){
           $('#response').html('<p class="text-danger">Please enter valid email address</p>');
           return false;
       }
       else {
           data = {
               email : email
           }
           //var data = JSON.stringify(model);
           api.kachha.subscribe({
               data: data,
               success: function (data) {
                   $("#response").html('<p>Thank you for your subscription.</p>');
                   $('#email_address').val('');
               },
               error : function () {
                   $("#response").html('<p>Error occured, Please try again.</p>');
               }
           })
       }
    });
  });

var sessionMgr = {
    set: function(name, val){
        if(typeof(val)==='object')
            val = JSON.stringify(val);
       // sessionStorage.setItem(name, val);
        localStorage.setItem(name,val);
    },
    get : function(name) {
        try {
            var str = localStorage.getItem(name);
            return JSON.parse(str);
        } catch (e){
            return localStorage.getItem(name);
        }
    },
    makeSecure: function (val) {
        localStorage.setItem('is_secure', val)
    },
    isSecure: function () {
        var d = localStorage.getItem('is_secure')
        if(d==='true')
            return true;
        else
            return false;
    }
};

function validEmail(v) {
    var r = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    return (v.match(r) == null) ? false : true;
}
