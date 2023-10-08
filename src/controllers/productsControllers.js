const path = require('path')
const fs = require('fs');
const db = require('../database/models');
const sequelize = db.sequelize;
const Producto = db.Producto;



const productsControllers = {
    productCart: (req, res) => {
        res.render('productCart')
    },
    productList: async (req, res) => {
        let producto = await db.Producto.findAll()
        res.render ('productList', {combo:producto})


    },
    detalle: async(req, res) => {
        let producto = await db.Producto.findByPk(req.params.id)
        res. render('productDetail',{combo:producto})


      

    },
    productCreate: (req, res) => {
        res.render('productCreate')
    },
    productCreateProcess:async (req, res) => {
    
        const comboNuevo = await db.Producto.create({
           
            "name": req.body.nombreProducto,
            "description": req.body.descripcion,
            "price": req.body.precio,
            "discount": 27,
            "images": req.file ? req.file.filename : 'DobleAngus.JPG',
            "category": req.body.categoria,
            "borrado":false
        })
        res.redirect('list')
        
    },
    edit: async (req, res) => {
      let producto =  await db.Producto.findByPk(req.params.id)
      res.render('productEdit',{combo:producto})
      
    
    }, 
    editProcess: (req, res) => {
        let comboEncontrado = listaProductos.find((combo) => combo.id == req.params.id)
        
        
        comboEncontrado.name = req.body.nombreProducto
        comboEncontrado.description = req.body.descripcion
        comboEncontrado.price = req.body.precio
        comboEncontrado.discount = 27
        comboEncontrado.images = req.file ? req.file.filename : 'DobleAngus.JPG'
        comboEncontrado.category = req.body.categoria
        

    fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(listaProductos, null, 2), 'utf-8');
    res.redirect('/')
    },
    deleteProcess: (req, res) => {
        let comboEncontrado = listaProductos.find((combo) => combo.id == req.params.id)

        comboEncontrado.borrado = true

    fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(listaProductos, null, 2), 'utf-8');
    res.redirect('/')
    }
}


module.exports = productsControllers