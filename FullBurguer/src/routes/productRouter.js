const express = require("express")
const router = express.Router();
const productsControllers = require("../controllers/productsControllers");
const multer = require("multer");
const path = require ("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = path.join(__dirname, '../../public/images')
        cb(null, folder);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + Math.round(Math.random()*1E9)
        cb(null,uniqueSuffix + path.extname(file.originalname));
    }
})
const uploadFile = multer({storage});


router.get("/list", productsControllers.productList);
router.get("/productCart", productsControllers.productCart);
router.get("/create",  productsControllers.productCreate);
router.post("/productCreate", uploadFile.single('images'), productsControllers.productCreateProcess);
router.get("/:id/edit", productsControllers.productEdit)
router.get("/productDetail/:id", productsControllers.detalle);



module.exports = router;
