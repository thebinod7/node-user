var express = require('express')
, router = express.Router();

router.use('/users',require('./user'));
router.use('/category',require('./category'));
//router.use('/api/category',require('./category'));

module.exports = router;