import mongoose from 'mongoose'


// declare RecipeSchema for basic structure for mongodb

const recipeSchema = mongoose.Schema({
    recipename: {
        type: String,
        required: true
    },
    ingredients: {
        trype: String,
    },
    formula: {
        type: String,
    },
});


// declare Recipes to access data from DB

const recipes = mongoose.model("recipes",recipeSchema);


export default recipes;