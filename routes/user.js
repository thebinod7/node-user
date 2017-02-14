var express = require('express');
var router = express.Router();

var user = require('../model/user');

/* Create new user */
router.post('/create', function(req, res, next) {
  var item = {
      name : req.body.name,
      phone : req.body.phone,
      email : req.body.email,
      password : req.body.password
  };
  var data = new user(item);
  data.save();
  data.save(function (err,doc) {
      if(err){
          res.json({success:false})
      }
      else {
          res.json({success:true,result:doc})
      }
  })
});

router.get('/details',function () {
    user.find()
        .then(function (doc) {
            res.render('index',{items:doc});
        })
});

module.exports = router;
