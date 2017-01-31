var express = require('express')
    , router = express.Router();

var fs = require("fs");

global.users = [{
    id:1,
    name:'Binod',
    hobby:'Blogging'
}];



router.get('/',function (req,res) {
    return res.json({
        users : global.users,
        error : false
    });
});

router.get('/category', function (req, res) {
    return res.json({
        message : 'Well done abba'
    });
});

router.post('/add', function (req,res) {
    if(!req.body.name){
        return res.json({
            message : 'Name is missing',
            error : true
        });
    }
    global.users.push(req.body);
    return res.json({
        message : 'Success',
        error : false
    });
});

router.put('/:user_id',function (req,res) {
    for(var i=0; i<=global.users.length; i++){
        if(global.users[i].id === parseInt(req.params.user_id,10)){
            global.users[i].name = req.body.name;
            global.users[i].hobby = req.body.hobby;
            return res.json({
                message : 'Success',
                error : false
            });
        }
    }
    return res.status(404).json({
    message:'user not found',
        error : true
    });
});

router.delete('/:user_id',function (req,res) {
    for(var i=0; i<global.users.length; i++){
        if(global.users[i].id === parseInt(req.params.user_id,10)){
            global.users.splice(i,1);
            return res.json({
                message : 'Success',
                error : false
            });
        }
    }
    return res.status(404).json({
        message:'user not found',
        error : true
    });
});

router.get('/:user_id',function (req,res) {
    for(var i=0; i<global.users.length; i++){
        if(global.users[i].id === parseInt(req.params.user_id,10)){
            return res.json({
                user : global.users[i],
                message : 'Success',
                error : false
            });
        }
    }
    return res.status(404).json({
        message:'user not found',
        error : true
    });
});

module.exports = router;