const { body, validationResult } = require('express-validator');
const registerMiddleware = [
    body('nombre').notEmpty().isLength({ min: 5 }).withMessage('Debe escribir su nombre completo'),
    body('fecha').notEmpty(),
    body('address').notEmpty(),
    body('email').notEmpty().isEmail().withMessage('Por favor escriba un email'),
    body('contraseña').notEmpty().isLength({ min: 8 }).withMessage('Escriba una contraseña'),
    body('recontraseña').custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Las contraseñas no coinciden');
        }
        return true;
      }),
     
    ];

module.exports = registerMiddleware;