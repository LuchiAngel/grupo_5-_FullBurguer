const {check} = require('express-validator');
const registerValidations = [
    check('nombre').notEmpty().isLength({ min: 5}).withMessage('Debe escribir su nombre completo'),
    check('fecha').notEmpty(),
    check('address').notEmpty(),
    check('email').notEmpty().isEmail().withMessage('Por favor escriba un email'),
    check('contraseña').notEmpty().isLength({ min: 8}).withMessage('Escriba una contraseña'),
    check('recontraseña').notEmpty().isLength({ min: 8}).withMessage('Vuelva a escribir su contraseña'),
]

module.exports = registerValidations;