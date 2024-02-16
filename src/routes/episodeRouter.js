const {Router} = require("express");
const episodeRouter = Router();
const episodeController = require("../controllers/episodeController");
episodeRouter.get("/",episodeController.getEpisodes); 
module.exports=episodeRouter;