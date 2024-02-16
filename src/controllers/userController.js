const { log } = require("console");
const {allusers, postUser} = require("../services/serviceUser");

module.exports={
    getUser: (req,res) => res.status(200).json(allusers()),
    postUser:(req,res) => {
        const user = req.body;
        if(!user)
        {
            res.status(420).json({message :"ne pastel user"});
        }
            res.status(200).json(postUser(user));
            console,log(allusers());
    }
};