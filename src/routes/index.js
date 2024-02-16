const{Router}=require("express");
const router = Router();
const homeRouter=require("./homeRouter");
const userRouter=require("./userRouter");
const episodeRouter=require("./episodeRouter");
router.use("/",homeRouter);
router.use("/user",userRouter);
router.use("/episode",episodeRouter);
module.exports={router};