import recipes from "../Models/recipeSchema.js";

//create product by using Post method

export const createRecipe = async (req, res) => {
  try {
    //req.body will get data from frontend that asigning in single sline
    const newRecipe = new recipes(req.body);
    await newRecipe.save();
    res
      .status(200)
      .json({ message: "Recipe Created Successfully", data: newRecipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
