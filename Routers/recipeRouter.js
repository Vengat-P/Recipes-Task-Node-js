import express from 'express'
import { createRecipe, getAllRecipes, getRecipeById, updateRecipe } from '../Controllers/recipeController.js';


//create express router function

const router = express.Router();


router.post("/create",createRecipe)
router.get("/getdata",getAllRecipes)
router.get("/getdata/:id",getRecipeById)
router.put("/update/:id",updateRecipe)






export default router;