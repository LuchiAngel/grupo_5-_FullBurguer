const express = require("express")
const router = express.Router();
const usersController = require("../controllers/usersControllers");
const multer = require("multer");
const path = require ("path");
const guestMiddleware = require ('../middleware/guestMiddleware');
const authMiddleware = require ('../middleware/authMiddleware');
const registerMiddleware = require("../middleware/registerMiddleware");

//Para validar el back
const {body} = require('express-validator')

//Validaciones

const validateRegistroForm = [
    body('nombre').notEmpty().withMessage('Escriba su nombre'),
    body('id_roles').notEmpty().withMessage('Seleccione un rol'),
    body('address').notEmpty().withMessage('Ingrese su domicilio'),
    body('email').notEmpty().isEmail().withMessage('Ingrese un email valido'),
    body('contraseña').notEmpty().isLength({ min: 8 }).withMessage('Escriba una contraseña'),
    body('recontraseña').custom((value, { req }) => {
        if (value !== req.check.password) {
          throw new Error('Las contraseñas no coinciden');
        }
        return true;
      }),
];


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

router.post("/register", usersUpload.single('avatar'), validateRegistroForm, usersController.registerProcess);    
router.post("/login", usersController.loginProcess);
router.get("/restore/:id", usersController.restore);


//Create, Edit y Delete.

router.get("/edit/:id", usersController.editUsers);
router.put("/edit/:id", usersController.editProcess);

router.delete("/delete/:id", usersController.deleteProcess);



module.exports = router;