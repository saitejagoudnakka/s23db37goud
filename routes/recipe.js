var express = require('express');
const recipe_controlers= require('../controllers/recipe');
var router = express.Router();
/* GET costumes */
router.get('/', recipe_controlers.recipe_view_all_Page );
/* GET detail costume page */
router.get('/detail', recipe_controlers.recipe_view_one_Page);
module.exports = router;
