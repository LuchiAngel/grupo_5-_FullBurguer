const multer = require("multer");
const path = require ("path");

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
const fileFilter = (req,file,cb)=>{
    if(file.mimetype.includes('image')){
        cb(null,true)
    }else{
        req.fileError = true;
        cb(null, false)
    }
}
const usersUpload = multer({fileFilter, storage: userStorage});

module.exports = usersUpload