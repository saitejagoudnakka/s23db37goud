const { Double } = require("mongodb")
const mongoose = require("mongoose")
const recipeSchema = mongoose.Schema({
type: {
    type: String,
    required: true
},
taste: {
    type: String,
    required: true
},
price: {
    type: Number,
    required: true,
    min: 0,
    max: 500
}
})
module.exports = mongoose.model("recipe",recipeSchema)


