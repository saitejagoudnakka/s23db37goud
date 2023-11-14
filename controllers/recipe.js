var recipe = require('../models/recipe');
// List of all recipe
exports.recipe_list = async function (req, res) {
    try {
        therecipes = await recipe.find();
        res.send(therecipes);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.recipe_view_all_Page = async function (req, res) {
    try {
        therecipes = await recipe.find();
        res.render('recipe', { title: 'Recipe Search Results', results: therecipes });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific recipe.
exports.recipe_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await recipe.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle recipe create on POST.
exports.recipe_create_post = async function (req, res) {
    console.log(req.body)
    let document = new recipe();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"recipe_type":"goat", "cost":12, "size":"large"}
    document.type = req.body.type;
    document.taste = req.body.taste;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle recipe delete form on DELETE.
exports.recipe_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await recipe.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle recipe update form on PUT.
exports.recipe_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await recipe.findById(req.params.id)
        // Do updates of properties
        if (req.body.type)
            toUpdate.type = req.body.type;
        if (req.body.taste) toUpdate.taste = req.body.taste;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};
// Handle a show one view with id specified by query
exports.recipe_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await recipe.findById(req.query.id)
        res.render('recipedetail',
            { title: 'recipe Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a recipe.
// No body, no in path parameter, no query.
// Does not need to be async
exports.recipe_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('recipecreate', { title: 'recipe Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a recipe.
// query provides the id
exports.recipe_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await recipe.findById(req.query.id)
res.render('recipeupdate', { title: 'recipe Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};