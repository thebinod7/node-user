var express = require('express')
    , router = express.Router();

var fs = require("fs");


router.get('/list',function (req,res) {
    var path = process.cwd(); /* Gets current working directory */
    var obj = JSON.parse(fs.readFileSync(path + '\\public\\sample\\users.json', 'utf8'));
    console.log(obj);
    res.send(obj);
});

router.post('/add',function (req,res) {
    var data = req.body;
    var path = process.cwd(); /* Gets current working directory */
    var obj = JSON.parse(fs.readFileSync(path + '\\public\\sample\\users.json', 'utf8'));
    obj.user.push(data);
    var string_data = JSON.stringify(obj);
    console.log(string_data);
    fs.writeFile(path + '\\public\\sample\\users.json',string_data, 'utf8',function (err,result) {
        if (err) throw err;
        console.log(result);
        console.log('Signup Successful');
        res.json('Signup Successful');
    });
});

router.get('/:uuid', function (req, res) {
    var path = process.cwd(); /* Gets current working directory */
    console.log(req.params.uuid);
    // First read existing users.
    var obj = JSON.parse(fs.readFileSync(path + '\\public\\sample\\users.json', 'utf8'));
    var user = obj.user.pull(req.params.uuid);
    console.log( user );
    res.end( JSON.stringify(user));
});


module.exports = router;

/*

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
}); */

