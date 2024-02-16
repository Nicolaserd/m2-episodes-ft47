const app = require("./src/server");
const puerto = 3002;
app.listen(puerto,()=>{
    console.log(`servidor escuchando  en el puerto :${puerto}`);
})