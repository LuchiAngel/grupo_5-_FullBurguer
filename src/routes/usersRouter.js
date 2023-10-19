const express = require("express")
const router = express.Router();
const usersController = require("../controllers/usersControllers");
const multer = require("multer");
const path = require ("path");
const guestMiddleware = require ('../middleware/guestMiddleware');
const authMiddleware = require ('../middleware/authMiddleware');
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

router.get("/register", guestMiddleware, usersController.register);       
router.get("/login", guestMiddleware, usersController.login); 
router.get("/profile/:id", authMiddleware, usersController.profile);
router.get("/logout",  usersController.logout);

router.post("/register", registerValidations, usersUpload.single('avatar'), usersController.registerProcess);    
router.post("/login", usersController.loginProcess);



//Create, Edit y Delete.

router.get("/edit/:id", usersController.editUsers);
router.put("/edit/:id", usersController.editProcess);

/*router.delete("/delete/:id", usersController.deleteProcess);*/



module.exports = router;