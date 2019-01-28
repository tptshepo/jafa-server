const express       = require("express");
const searchRouter  = require("./search.router");
const scoreRouter   = require("./score.router");
const commentRouter = require("./comment.router");
const recipeRouter = require("./recipe.router");
const userRouter    = require("./user.router");

const router = express.Router();

router.get("/foods", searchRouter.searchFood);
router.put("/foods", searchRouter.updateFood);
router.put("/recipes", searchRouter.searchRecipe);


router.get("/foods/:id/score", scoreRouter.fetchScore);
router.post("/foods/:id/score", scoreRouter.createScore);

router.post('/foods/:id/comment', commentRouter.addComment);

router.post("/recipes", recipeRouter.createRecipe);
router.post("/recipes/:id/ingredients", recipeRouter.setRecipeIngredient);


// Users routes
router.post('/users/authenticate', userRouter.authenticate);
router.post('/users/register', userRouter.register);
router.get('/users/', userRouter.getAll);
router.get('/users/current', userRouter.getCurrent);
router.get('/users/:id', userRouter.getById);
router.put('/users/:id', userRouter.update);
router.delete('/users/:id', userRouter._delete);


module.exports = router;
