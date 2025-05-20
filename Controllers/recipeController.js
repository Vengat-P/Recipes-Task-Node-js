import recipes from "../Models/recipeSchema.js";

//create product by using Post method

export const createRecipe = async (req, res) => {
  try {
    //req.body will get data from frontend that asigning in single sline
    const newRecipe = new recipes(req.body);
    //tosave new details in mongoDB
    await newRecipe.save();
    res
      .status(200)
      .json({ message: "Recipe Created Successfully", data: newRecipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get all Recipes

export const getAllRecipes = async (req, res) => {
  try {
    const getRecipes = await recipes.find();
    res
      .status(200)
      .json({ message: "Recipes Retrived Successfully", data: getRecipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get Recipe By Id

export const getRecipeById = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipeDetails = await recipes.findById(recipeId);
    if (!recipeDetails) {
      return res.status(404).json({ message: "Recipe Not Found" });
    }
    res
      .status(200)
      .json({ message: "Recipe Retrived Successfully", data: recipeDetails });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
