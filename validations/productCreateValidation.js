const { body } = require('express-validator')


const validateCreateProductForm = [
    body('nombreProducto').notEmpty().withMessage('Debes ingresar el nombre del producto'),
    body('descripcion').notEmpty().withMessage('Debes ingresar la descripción del producto'),
    body('id_categoria').notEmpty().withMessage('Debes seleccionar una categoria'),
    body('precio').notEmpty().isNumeric().withMessage('Debes ingresar el precio del producto'),
    body('images').custom((value, { req }) => {
        let file = req.file;
        if (req.fileError) {
            throw new Error('Adjunte una imagen con formato valido');
        }
        return true
    })


];

module.exports = validateCreateProductForm