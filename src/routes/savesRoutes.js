const savedRouter = require("express").Router();

const savedCtrl = require("../controllers/savesCtrl");

savedRouter.post("/", savedCtrl.postNewSavesCtrl);
//savedRouter.delete("/", recipeByIdCtrl.getRecipeById);

module.exports = savedRouter;
