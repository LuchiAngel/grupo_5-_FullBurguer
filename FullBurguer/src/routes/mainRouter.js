const express = require("express")
const router = express.Router();

const mainControllers = require("../controllers/mainControllers")

router.get("/index", mainControllers.index);
router.get("/productCart", mainControllers.productCart);
router.get("/productDetail", mainControllers.productDetail);
router.get("/register", mainControllers.register);
router.get("/login", mainControllers.login);

module.exports = router;
