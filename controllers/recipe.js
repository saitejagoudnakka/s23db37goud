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
// VIEWS
// Handle a show all view
exports.recipe_view_all_Page = async function(req, res) {
    try{
    theCostumes = await recipe.find();
    res.render('recipe', { title: 'Recipe Search Results', results: theCostumes });
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
exports.recipe_create_post = async function(req, res) {
    console.log(req.body)
    let document = new recipe();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.type = req.body.type;
    document.taste = req.body.taste;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle recipe delete form on DELETE.
exports.recipe_delete = function(req, res) {
res.send('NOT IMPLEMENTED: recipe delete DELETE ' + req.params.id);
};
// Handle recipe update form on PUT.
exports.recipe_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: recipe update PUT' + req.params.id);
};