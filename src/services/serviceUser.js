const {allUsers} = require("../utils/dataBase");
function allusers() {
    return allUsers;
}
function postUser({name,email,password}) {
   if(!name||!email||!password){
    throw new Error("FALTA NAME EMAIL PASSWORD");
   }
   allUsers.push({name,email,password});
}
module.exports={allusers,postUser};