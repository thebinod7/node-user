var express = require('express')
    , router = express.Router();

var fs = require("fs");


router.get('/list',function (req,res) {
    var path = process.cwd(); /* Gets current working directory */
    var obj = JSON.parse(fs.readFileSync(path + '\\public\\sample\\category.json', 'utf8'));
    console.log(obj);
    res.send(obj);
});

router.get('/add',function (req,res) {
    var category = {
            "uuid" : "120F7444-E245-4ED3-8925-ABB5637B5D59",
            "category_name" : "test",
            "category_desc" : "test category"
    }
    var path = process.cwd(); /* Gets current working directory */
    var obj = JSON.parse(fs.readFileSync(path + '\\public\\sample\\category.json', 'utf8'));
    console.log(obj);
    return;
    obj.category.push({uuid: "120F7444-E245-4ED3-8925-ABB5637B5D59", category_name:"test",category_desc:"test category"});
    var json = JSON.stringify(obj);
    console.log(json);
    fs.writeFile(path + '\\public\\sample\\category.json',json, 'utf8',function (err,data) {
        console.log(err);
    });
});


router.get('/:uuid', function (req, res) {
    var path = process.cwd(); /* Gets current working directory */
    console.log(path);
    // First read existing users.
    var obj = JSON.parse(fs.readFileSync(path + '\\public\\sample\\category.json', 'utf8'));
        var cat = obj["category" + req.params.uuid];
        console.log( obj );
        console.log(cat);
        res.end( JSON.stringify(cat));
});


module.exports = router;