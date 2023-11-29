const express = require("express")
const router = express.Router();
const usersController = require("../controllers/usersControllers");
const multer = require("multer");
const path = require ("path");
const guestMiddleware = require ('../middleware/guestMiddleware');
const authMiddleware = require ('../middleware/authMiddleware');
const registerMiddleware = require("../middleware/registerMiddleware");
const usersUpload = require ('../middleware/multerMiddleware');
//Para validar el back
const validateRegistroForm = require ('../../validations/registerValidator');


router.get("/register", guestMiddleware, usersController.register);       
router.get("/login", guestMiddleware, usersController.login); 
router.get("/profile/:id", authMiddleware, usersController.profile);
router.get("/logout",  usersController.logout);

router.post("/register", usersUpload.single('avatar'), validateRegistroForm, usersController.registerProcess);    
router.post("/login", usersController.loginProcess);
router.get("/restore/:id", usersController.restore);

router.get("/list", usersController.list)
//Create, Edit y Delete.

router.get("/edit/:id", usersController.editUsers);
router.put("/edit/:id", usersUpload.single('avatar'),validateRegistroForm, usersController.editProcess);

router.delete("/delete/:id", usersController.deleteProcess);



module.exports = router;