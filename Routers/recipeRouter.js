import express from 'express'
import { createRecipe, getAllRecipes } from '../Controllers/recipeController.js';


//create express router function

const router = express.Router();


router.post("/create",createRecipe)
router.get("/getdata",getAllRecipes)






export default router;