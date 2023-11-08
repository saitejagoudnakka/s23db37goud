var recipe = require('../models/recipe');
// List of all recipe
exports.recipe_list =  async function(req, res) {
    try{
    theCostumes = await recipe.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// for a specific recipe.
exports.recipe_detail = function(req, res) {
res.send('NOT IMPLEMENTED: recipe detail: ' + req.params.id);
};
// Handle recipe create on POST.
exports.recipe_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: recipe create POST');
};
// Handle recipe delete form on DELETE.
exports.recipe_delete = function(req, res) {
res.send('NOT IMPLEMENTED: recipe delete DELETE ' + req.params.id);
};
// Handle recipe update form on PUT.
exports.recipe_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: recipe update PUT' + req.params.id);
};