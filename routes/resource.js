var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var recipe_controller = require('../controllers/recipe');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// RECIPE ROUTES ///
// POST request for creating a recipe.
router.post('/recipe', recipe_controller.recipe_create_post);
// DELETE request to delete recipe.
router.delete('/recipe/:id', recipe_controller.recipe_delete);
// PUT request to update recipe.
router.put('/recipe/:id', recipe_controller.recipe_update_put);
// GET request for one recipe.
router.get('/recipe/:id', recipe_controller.recipe_detail);
// GET request for list of all recipe items.
router.get('/recipe', recipe_controller.recipe_list);
module.exports = router;

