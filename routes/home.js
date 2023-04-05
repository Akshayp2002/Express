var express = require('express');
var router = express.Router();


router.get('/',function(req, res, next) {
  res.render('home',{ value: 'HOME' });
});

module.exports = router;
