const express = require('express');
const app = express();
const mainRouter = require("./routes/mainRouter")
const path = require('path')

app.use(express.static('public'))


app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, 'views/users'), path.join(__dirname, 'views/products')]);
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("servidor corriendo en puerto:http://localhost:3000/index");
})

app.use("/", mainRouter)