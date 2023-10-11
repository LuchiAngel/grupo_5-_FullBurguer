const express = require("express")
const router = express.Router();
const productsControllers = require("../controllers/productsControllers");
const multer = require("multer");
const path = require ("path");
const authMiddleware = require ('../middleware/authMiddleware');

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
router.get("/productCart",authMiddleware, productsControllers.productCart);
router.get("/create",  productsControllers.productCreate);
router.post("/create", uploadFile.single('images'), productsControllers.productCreateProcess);
router.get("/edit/:id", productsControllers.edit);
router.get("/productDetail/:id", productsControllers.detalle);
/*router.get("/delete/:id", productsControllers.delete)*/

//PUT Y DELETE
router.put("/edit/:id", productsControllers.editProcess);
router.delete("/delete/:id", productsControllers.deleteProcess);


module.exports = router;
