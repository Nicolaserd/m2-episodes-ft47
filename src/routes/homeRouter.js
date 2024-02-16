const {Router} = require("express");
const homeRouter = Router();
const homeControllers = require("../controllers/homeController");
homeRouter.get("/",homeControllers.getHome); 
module.exports=homeRouter;