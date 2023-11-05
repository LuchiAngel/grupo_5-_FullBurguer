const express = require("express")
const router = express.Router();
const productsControllers = require("../controllers/productsControllers");
const multer = require("multer");
const path = require ("path");
const authMiddleware = require ('../middleware/authMiddleware');
const isAdmin = require ('../middleware/adminMiddleware');


//Para validar el back
const {body} = require('express-validator')

//Validaciones

const validateCreateProductForm = [
    body('nombreProducto').notEmpty().withMessage('Debes ingresar el nombre del producto'),
    body('descripcion').notEmpty().withMessage('Debes ingresar la descripción del producto'),
    body('id_categoria').notEmpty().withMessage('Debes seleccionar una categoria'),
    body('precio').notEmpty().isNumeric().withMessage('Debes ingresar el precio del producto'),
    body('images').notEmpty().withMessage('Debes ingresar una foto del producto'),
];

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
router.get("/create", isAdmin,  productsControllers.productCreate);
router.post("/create", isAdmin, validateCreateProductForm, uploadFile.single('images'), productsControllers.productCreateProcess);
router.get("/edit/:id", isAdmin,  productsControllers.edit);
router.get("/productDetail/:id", productsControllers.detalle);
router.get("/restore/:id", isAdmin, productsControllers.restore);

//PUT Y DELETE
router.put("/edit/:id", isAdmin, validateCreateProductForm, uploadFile.single('images'), productsControllers.editProcess);
router.delete("/delete/:id", isAdmin, productsControllers.deleteProcess);


module.exports = router;
