const express = require("express")
const router = express.Router();
const usersController = require("../controllers/usersControllers");
const multer = require("multer");
const path = require ("path");
//const loginValidations = require("../../validations/loginValidator");
const registerValidations = require("../../validations/registerValidator");
const userStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = path.join(__dirname, '../../public/images/users')
        cb(null, folder);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + Math.round(Math.random()*1E9)
        cb(null,uniqueSuffix + path.extname(file.originalname));
    }
})
const usersUpload = multer({storage: userStorage});

router.get("/register", usersController.register);       
router.get("/login", usersController.login);     
router.post("/register", registerValidations, usersUpload.single('avatar'), usersController.registerProcess);    
//router.post("login",loginValidations,usersController.loginProcess);
module.exports = router;