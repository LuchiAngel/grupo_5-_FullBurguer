const path = require('path')
const fs = require('fs');
const db = require('../database/models');
const { log } = require('console');
const sequelize = db.sequelize;
const Producto = db.Producto;
const Tipo = db.Tipo;

const categoriaControllers={
    list: (req, res) => {
        db.Tipo.findAll({
            include: [{
                association: 'productos'
            }]
        })
            .then(tipo => {
                res.send(tipo);
                //res.render('tiposList.ejs', {tipo})
              
            })
    }
    

}

module.exports = categoriaControllers;
