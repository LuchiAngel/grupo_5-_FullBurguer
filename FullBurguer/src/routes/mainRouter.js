const express = require("express")
const router = express.Router();

const controller = require("../controllers/mainControllers")

router.get("/index", controller.index);
router.get("/productCart", controller.productCart);
router.get("/productDetail", controller.productDetail);
router.get("/register", controller.register);
router.get("/login", controller.login);

module.exports = router;
