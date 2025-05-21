## Recipes App Task Using Node js

## Overview

- Complete CRUD (Create, Read, Update, Delete) application for managing recipes using Node.js, Express.js, and Mongoose.This application follows the MVC pattern

## Tech Stack

- **NodeJs** for Backend
- **expressJs** for performence and easy update
- **cors** for middleware
- **dotenv** for environmrnt variables
- **mongoose** to Connect Mongo DB
- **Postman** for API Documentation
- **VSCode** for development
- **JavaScript** for applying logics

## Basic Installation and MVC Folder setup

**Step 1**

- Initailize NPM by using npm init --y command in prombt then change scripts start for node index.js and type module and create index.js file.

**Step 2**
- install required pacakges npm i expres cors dotenv nodemon. Then add scripts for dev to automatic restart of node index.js

 **Step 3**
- create folders and required javascript file in MVC Patterns its nothing but database, models,routers and controllers.MVC- Model Views Controllers .

## Logics

**Step 1**

- initalize express function and add middlewares like express.json and cors.then create defult route for home page of backend. then declare port and start the server using listen function.

**Step 2**

- connect mongo DB using mongoose . make a async function with trycatch that returns our connection string with mongoose connect function.then call this function in indes file before default route.

**Step 3**

- need to create Schema structure using mongoose schema function . this structure format will refelcts our DB so create wisely . Each field should have type and required. then store Schema in variable to access further for this use mongoose model function.

**Step 4**

- In recipe router file impoert express and declare (express.router) function to make custom routes for each operations. export default router function .then import this router file in index file with type of js file. then create custom route function for app and pass this (/api/recipes/) and reciperoute(this will replace all opertions end point).

**Step 5**

- **createRecipe** In recipecontroller file first import recipeschema which is inlcude our schema structure and make an export function for createRecipe . This function also trycatch model and parameters will be request and response. catch will give error message in json format.In try block declare variable with new function and call recipes as function from stored schema pass inside request.body . then to save new recipe call save function.now in reponse with 200 status code pass json message and data(new recipe).now goto reciperouter file make router with post function and pass create path and createRecipe function(automatcally controllers will import need to change last file in js type). for checking need to go to postman and give the localhost url with our custom routes.

**Step 6**

- here after we need to create remaining functions in controllers and router path for remaining functions and check same procedure in postman.

**Step 7**

- **getAllRecipes** In recipecontroller file export and declare with function name of getAllRecipes.this is also async function and trycatch method. in catch block pass the response error message in json. In try block declare getrecipes of stored schema by using mongodb find method and pass this variable in response data. now go to router and add path for getdata(/getdata) and pass this getAllRecipes function. now go to postman and chcek it.

**Step 8**

- **getRecipeById** In recipecontroller file make function like same before method til trycatch block. in catch block pass the response of error message. in try block first get id from request using params method and stored as recipeId. then use findById function of mongo db to get given id details and store that details in recipeDetails variable. pass the parameter recipe id in findById function. then write validations if suppose data not found for that. then send response with data recipeDetails. now go to recipe router make path for getdata by id(/getdata/:id) and callgetRecipeById function.then go to postman and fill route with id and cehck it.

**Step 9**

- **updateRecipe** In recipecontroller file make function like same before method til trycatch block. In catch block pass the response of error message. In Try block get request id and store into recipeId by using params method. then destructure the schema structure with request.body method. now find the request id details using findByIdAndUpdate method of mongo db method and stored as result.inside of this find function pass \_id of recipeId and all fields object and new as true object. then make validation function for product not found and send response with data of result.then go to recipeRouter and make router for update(/update/:id) and pass updateRecipe function. now go to postman check with cutomized route and in body raw method json type and updtae the details.

**Step 10**

- **deleteRecipe** In recipeConroller file make function same like before step til trycatch block. In catch block
  pass the response of error message. In try block get request id and stored as deleteId by using params method. now find the requested id details by using findByIdAndDelete function method of monogo db method. pass the parameter deleteId. this will get the requested id details and delete that recipe.we can enter validation for recipe not found for id not matching.if we want we can show remaining recipes by using find method for stored schema and pass response with data of recipes to show remaining recipes

## How to use customize routes

- **CreateRecipe** - http://recipes-task-kesy.onrender.com/api/recipes/create to create Recipe .
- **getAllRecipes** - http://recipes-task-kesy.onrender.com/api/recipes/getdata to retrive all recipes.
- **getRecipeById** - http://recipes-task-kesy.onrender.com/api/recipes/getdata/(:id) to retrive single recipe by id
- **updateRecipe** - http://recipes-task-kesy.onrender.com/api/recipes/update/(:id) to update a recipe by Id.
- **deleteRecipe** - http://recipes-task-kesy.onrender.com/api/recipes/delete/(:id) to delete Recipe By Id

## Features

- Clean and Readable Code
- MVC pattern codes

## API Documentation Link

- https://documenter.getpostman.com/view/44995047/2sB2qZD1vK

## Demo

- https://recipes-task-kesy.onrender.com/

## Authors

- [@ Vengat p](https://github.com/Vengat-P)
