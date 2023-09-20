const express = require("express")
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");
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



router.get("/", mainControllers.index);
router.get("/register", mainControllers.register);
router.get("/login", mainControllers.login);

module.exports = router;


