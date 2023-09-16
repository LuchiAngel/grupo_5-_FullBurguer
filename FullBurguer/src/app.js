const express = require('express');
const app = express();
const mainRouter = require("./routes/mainRouter");
const productsRouter = require ("./routes/productRouter");
const usersRouter = require ("./routes/usersRouter");
const path = require('path');
//const bcrypt= require('bcrypt');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, 'views/users'), path.join(__dirname, 'views/products')]);
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("servidor corriendo en puerto:http://localhost:3000");
});

app.use("/", mainRouter);
app.use("/product", productsRouter);
app.use("/users", usersRouter);
