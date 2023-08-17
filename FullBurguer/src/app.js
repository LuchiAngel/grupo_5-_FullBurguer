const express = require('express');
const app= express();
const mainRouter= require("./routes/mainRouter")

app.use(express.static('public'))
app.listen('3000', ()=>{
    console.log("servidor corriendo en puerto:http://localhost:3000/index");
})

app.use("/",mainRouter)