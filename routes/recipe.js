var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('recipe', { title: 'Search Results recipe' });
});

module.exports = router;