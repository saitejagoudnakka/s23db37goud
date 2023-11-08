const mongoose = require("mongoose")
const recipeSchema = mongoose.Schema({
type: String,
taste: String,
price: Number
})
module.exports = mongoose.model("recipe",recipeSchema)