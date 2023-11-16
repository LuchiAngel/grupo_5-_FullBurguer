const express = require("express")
const router = express.Router();
const controller = require("../../controllers/apis/productsApi");






router.get("/", controller.list);
router.get("/detalle/:id", controller.detalle);



module.exports = router;
