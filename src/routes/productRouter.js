const express = require("express")
const router = express.Router();
const productsControllers = require("../controllers/productsControllers");
const multer = require("multer");
const path = require ("path");
const authMiddleware = require ('../middleware/authMiddleware');
const isAdmin = require ('../middleware/adminMiddleware');
const uploadFile =require ('../middleware/multerProduct');

//Para validar el back
const validateCreateProductForm = require ( '../../validations/productCreateValidation')


router.get("/list", productsControllers.productList);
router.get("/productCart",authMiddleware, productsControllers.productCart);
router.get("/create", isAdmin,  productsControllers.productCreate);
router.post("/create", isAdmin, uploadFile.single('images'), validateCreateProductForm, productsControllers.productCreateProcess);
router.get("/edit/:id", isAdmin,  productsControllers.edit);
router.get("/productDetail/:id", productsControllers.detalle);
router.get("/restore/:id", isAdmin, productsControllers.restore);

//PUT Y DELETE
router.put("/edit/:id", isAdmin, uploadFile.single('images'), productsControllers.editProcess);
router.delete("/delete/:id", isAdmin, productsControllers.deleteProcess);


module.exports = router;
