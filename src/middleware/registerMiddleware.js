const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models');
const Usuario = db.Usuario;
const roles = db.Roles;

const registerMiddleware = () => {
  return [
    check('nombre').notEmpty().isLength({ min: 5 }).withMessage('Debe escribir su nombre completo'),
    check('fecha').notEmpty(),
    check('address').notEmpty(),
    check('email').notEmpty().isEmail().withMessage('Por favor escriba un email'),
    check('contraseña').notEmpty().isLength({ min: 8 }).withMessage('Escriba una contraseña'),
    check('recontraseña').custom((value, { req }) => {
        if (value !== req.check.password) {
          throw new Error('Las contraseñas no coinciden');
        }
        return true;
      }),
     
    ];
  };
  const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
       res.render('register', {
      errors: errors.array(),
      oldData: req.body,
    });
  };


module.exports = validate