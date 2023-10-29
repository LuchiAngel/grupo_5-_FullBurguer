const path = require('path')
const fs = require('fs');
const db = require('../database/models');
const { log } = require('console');
const sequelize = db.sequelize;
const Producto = db.Producto;
const Tipo = db.Tipo;



const productsControllers = {
    productCart: async (req, res) => {
       
        res.render('productCart')
    },
    productList: async (req, res) => {
        let producto = await db.Producto.findAll({
            include: [{
                association: 'tipos'
            }]
        })
       res.render ('productList', {combo:producto})


    },
    detalle: async(req, res) => {
        let producto = await db.Producto.findByPk(req.params.id)
        res. render('productDetail',{combo:producto})
    

    },
    productCreate:async (req, res) => {
       const tipos= await db.Tipo.findAll();
        res.render('productCreate', {tipos});
    },
    productCreateProcess:async (req, res) => {
    
        const comboNuevo = await db.Producto.create({
           
            "name": req.body.nombreProducto,
            "description": req.body.descripcion,
            "price": req.body.precio,
            "discount": 27,
            "images": req.file ? req.file.filename : 'DobleAngus.JPG',
            "id_categoria": req.body.id_categoria,
            "borrado":false
        })
        res.redirect('list')
        
    },
    edit: async (req, res) => {
      let producto =  await db.Producto.findByPk(req.params.id)
      const tipos= await db.Tipo.findAll();
      res.render('productEdit',{combo:producto, tipos})
      
    
    }, 
    editProcess: async (req, res) => {
        const combo = await db.Producto.findByPk(req.params.id)
        const comboEditado = await db.Producto.update({
           
            "name": req.body.nombreProducto,
            "description": req.body.descripcion,
            "price": req.body.precio,
            "discount": 27,
            "images": req.file ? req.file.filename : 'DobleAngus.JPG',
            "id_categoria": req.body.id_categoria,
            "borrado":false
        },{where:{
            id:req.params.id}});
      console.log(comboEditado)
            res.redirect('/product/list')
            
      
        },
        delete: async function (req, res){
            const combo = await db.Producto.findByPk(req.params.id)
            res.render('productEdit',{combo:combo})


        },
    deleteProcess: async (req, res) => {
       const comboEliminado = await db.Producto.destroy({where:{id: req.params.id}})
       console.log(comboEliminado);
       res.redirect("/product/list")
       
    
   },
   restore: async (req, res) => {
        const comboRestaurada = await db.Producto.restore({where:{id: req.params.id}})
   console.log(comboRestaurada);
   res.redirect("/product/list")
},
}

module.exports = productsControllers