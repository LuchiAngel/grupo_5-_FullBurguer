const express = require("express")
const router = express.Router();
const categoriaControllers = require("../controllers/categoriaControllers");
const path = require ("path");

router.get('/categoria', categoriaControllers.list);

module.exports=router;
