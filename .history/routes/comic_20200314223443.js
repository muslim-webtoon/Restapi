'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('This is a API server and thus does not render anything.');
});

module.exports = router;
