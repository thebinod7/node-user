var ajax = function(cfg){
    if(!cfg.url){
        cfg.error({message:'Url must be sent'});
        return;
    }


    $.ajax({
        url: cfg.url,
        method: cfg.method || 'GET',
        headers: cfg.headers || {'content-type':'application/json'},
        data: JSON.stringify(cfg.data) || null,
        success: function (data, is_success, res) {
            data = data.data || data;
            if(cfg.success) {
                cfg.success(data, res);
            }
        },
        error: function (response) {
            if(cfg.error)
                cfg.error(response);
        }
    })
};

var api_misc = '/api/1/misc';
var api_user_path = "/rs/user/1/";

var api = {
    misc: {
        contact: function(cfg){
            cfg.method = 'POST';
            cfg.url =  api_misc + '/contact';
            ajax(cfg)
        },
        proposal: function(cfg){
            cfg.method = 'POST';
            cfg.url =  api_misc + '/proposal';
            ajax(cfg)
        }
    },
    user : {
        get_profile: function(cfg){
            var user = sessionMgr.get('user');
            cfg.headers = {rs_token: user.rs_token, 'content-type':'application/json'};
            cfg.url = api_user_path + 'me';
            ajax(cfg)
        }
    }
};