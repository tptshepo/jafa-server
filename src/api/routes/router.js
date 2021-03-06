const express = require("express");
const searchRouter = require("./search.router");
const scoreRouter = require("./score.router");
const commentRouter = require("./comment.router");
const recipeRouter = require("./recipe.router");
const userRouter = require("./user.router");
const storeRouter = require("./store.router");
const priceRouter = require("./price.router");


const router = express.Router();

router.get("/foods", searchRouter.searchFood);
router.get("/foods/:id", searchRouter.getFood);
router.put("/foods", searchRouter.updateFood);
router.get("/recipes", searchRouter.searchRecipe);

router.get("/foods/:id/price", priceRouter.fetchFoodPrice);
router.post("/foods/:id/price", priceRouter.addNewPrice);

router.get("/foods/:id/score", scoreRouter.fetchScore);
router.post("/foods/:id/score", scoreRouter.createScore);

router.post('/foods/:id/comment', commentRouter.addFoodComment);
router.get('/foods/:id/comment', commentRouter.getFoodComments);

router.post('/recipes/:id/comment', commentRouter.addRecipeComment);
router.get('/recipes/:id/comment', commentRouter.getRecipeComments);

router.post("/recipes", recipeRouter.createRecipe);
router.post("/recipes/:id/ingredients", recipeRouter.setRecipeIngredient);
router.get("/recipes/:id/price", recipeRouter.getRecipePrice);

router.get("/stores", storeRouter.fetchStores);
router.get("/stores/:id", storeRouter.fetchStore);
router.post("/stores", storeRouter.createStore);
router.get("/regions", storeRouter.fetchRegions);

// Users routes
router.post('/users/authenticate', userRouter.authenticate);
router.post('/users/register', userRouter.register);
router.put('/users/:id', userRouter.update);
router.delete('/users/:id', userRouter._delete);


module.exports = router;
