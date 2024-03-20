const app = require('./src/server');
const dbCon = require("./src/config/dbCon")
const PORT = 3000;

dbCon().then(
    res => {
        app.listen(PORT, ()=>{
            console.log(`Servidor en puerto: ${PORT}`);
        });
    }
)
.catch(err=>{
    console.log("error conectando a la DB: " + err);
})