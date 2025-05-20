import mongoose from 'mongoose'


// declare RecipeSchema for basic structure for mongodb

const recipeSchema =mongoose.Schema({
    recipeName: {
        type: String,
        required : true,
    },
    ingredients: {
        trype: String,
        required : true,
    },
    formula: {
        type: String,
        required: true
    }
});


// declare Recipes to access data from DB

const recipes = mongoose.model("recipes",recipeSchema);


export default recipes;