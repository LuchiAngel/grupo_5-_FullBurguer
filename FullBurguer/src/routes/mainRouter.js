const express = require("express")
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");
const multer = require("multer");
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
const uploadFile = multer({ storage: storage });



router.get("/", mainControllers.index);
router.get("/register", mainControllers.register);
router.get("/login", mainControllers.login);
router.get("/productList", mainControllers.productList);
router.get("/productCart", mainControllers.productCart);
router.get("/productCreate",  mainControllers.productCreate);
router.post("/productCreate",uploadFile.single('images'), mainControllers.productCreateProcess);
router.get("/productEdit", mainControllers.productEdit)
router.get("/oneProduct", mainControllers.oneProduct);

module.exports = router;


