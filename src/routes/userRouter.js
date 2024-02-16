const {Router} = require("express");
const userRouter = Router();
const userController = require("../controllers/userController");
userRouter.get("/",userController.getUser); 
userRouter.post("/",userController.postUser); 
module.exports=userRouter;