var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('t_login');
});

module.exports = router;