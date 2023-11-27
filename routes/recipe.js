var express = require('express');
const recipe_controlers= require('../controllers/recipe');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET recipe */
router.get('/', recipe_controlers.recipe_view_all_Page );
/* GET detail recipe page */
router.get('/detail', recipe_controlers.recipe_view_one_Page);
/* GET create recipe page */
router.get('/create', recipe_controlers.recipe_create_Page);
/* GET create update page */
router.get('/update',secured, recipe_controlers.recipe_update_Page);
/* GET delete recipe page */
router.get('/delete', recipe_controlers.recipe_delete_Page);
module.exports = router;
