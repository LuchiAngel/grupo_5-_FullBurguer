const express = require("express")
const router = express.Router();

const mainControllers = require("../controllers/mainControllers");



router.get("/", mainControllers.index);
router.get("/register", mainControllers.register);
router.get("/login", mainControllers.login);
router.get("/productList",  mainControllers.productList);
router.get("/productCart", mainControllers.productCart);
router.get("/productCreate", mainControllers.productCreate);
router.post("/productCreate", mainControllers.productCreateProcess);
router.get("/productEdit", mainControllers.productEdit)
router.get("/oneProduct", mainControllers.oneProduct);

module.exports = router;


