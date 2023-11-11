const express = require("express")
const router = express.Router();
const controller = require("../../controllers/apis/productsApi");






router.get("/list", controller.list);
router.get("/productDetail/:id", controller.detalle);



module.exports = router;
