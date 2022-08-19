// Configuración del server
const express = require("express");
const app = express();
const db = require("./config");
const routes = require("./controllers/index");
const models = require("./models")
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(express.json())
app.use(cookieParser())

app.use("/api", routes);
app.use((err,req,res,next)=>{
    res.status(500).send(err.message)
});

db.sync({force : false}).then(()=>{
    app.listen(3001,function(){
        console.log("iniciando servidor en puerto 3001")
    }) 
})
