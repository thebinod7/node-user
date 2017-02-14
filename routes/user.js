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
  data.save(function (err,doc) {
      if(err){
          res.json({success:false})
      }
      else {
          res.json({success:true,result:doc})
      }
  })
});

router.get('/list',function (req,res,next) {
    user.find(function (err, doc) {
        if (err) {
            res.status(500).send(err)
        } else {
            // send the list of all people
            res.json({success:true,result:doc});
        }
    });
});

router.get('/find/:id',function (req,res,next) {
    user.findById(req.params.id, function (err, doc) {
        if (err) {
            res.send(err)
        }
        if (doc) {
            res.json({success:true,result:doc});
        } else {
            res.send("No kitten found with that ID")
        }
    });
});

router.put('/update/:id',function (req,res,next) {
    user.findById(req.params.id, function (err, user) {
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {
            user.name = req.body.name || user.name;
            user.phone = req.body.phone || user.phone;
            user.email = req.body.email || user.email;

            // Save the updated document back to the database
            user.save(function (err, doc) {
                if (err) {
                    res.status(500).send(err)
                }
                res.json({success:true,result:doc});
            })
        }
    });
});

router.delete('/:id', function (req,res,next) {
    user.findByIdAndRemove(req.params.id, function (err, doc) {
        var response = {
            message: "User successfully deleted",
            id: doc._id
        };
        res.json({success:true,result:response});
    });
});

module.exports = router