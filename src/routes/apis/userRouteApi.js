const express = require("express")
const router = express.Router();
const controller = require("../../controllers/apis/usersApi");






router.get("/", controller.list);
router.get("/profile/:id", controller.profile);



module.exports = router;
