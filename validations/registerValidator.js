const {body} = require('express-validator')

const validateRegistroForm = [
    body('nombre').notEmpty().withMessage('Escriba su nombre'),
    body('id_roles').notEmpty().withMessage('Seleccione un rol'),
    body('address').notEmpty().withMessage('Ingrese su domicilio'),
    body('email').notEmpty().isEmail().withMessage('Ingrese un email valido'),
    body('password').notEmpty().isLength({ min: 8 }).withMessage('Escriba una contraseña'),
    body('avatar').custom((value,{req})=>{
        let file = req.file;
        if(req.fileError){
            throw new Error ('Adjunte una imagen con formato valido');
        }
        return true
    })
   
];


   module.exports = validateRegistroForm