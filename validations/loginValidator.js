const {check}=require("express-validator");


const loginValidations=[
    check("email")
.isEmail().withMessage("El formato de email no es valido")
.notEmpty().withMessage("El campo es requerido"),
check("password")
.notEmpty().withMessage("El campo es requerido"),
]


module.exports= loginValidations;