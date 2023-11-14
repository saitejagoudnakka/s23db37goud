var express = require('express');
const recipe_controlers= require('../controllers/recipe');
var router = express.Router();
/* GET recipe */
router.get('/', recipe_controlers.recipe_view_all_Page );
/* GET detail recipe page */
router.get('/detail', recipe_controlers.recipe_view_one_Page);
/* GET create recipe page */
router.get('/create', recipe_controlers.recipe_create_Page);
/* GET create update page */
router.get('/update', recipe_controlers.recipe_update_Page);
module.exports = router;
