var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('t_register');
});

module.exports = router;