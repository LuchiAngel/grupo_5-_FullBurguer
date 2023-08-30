const path = require('path')
let fs = require('fs');


let listaProductos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8'));

const controller = {
    index: (req, res) => {
        res.render('index')
    },

    productCart: (req, res) => {
        res.render('productCart')
    },
    productDetail: (req, res) => {
        res.render('productDetail')
    },
    register: (req, res) => {
        res.render('register')
    },
    login: (req, res) => {
        res.render('login')
    },
    productCreate: (req, res) => {
        res.render('productCreate')
    },
    productCreateProcess: (req, res) => {
        let comboNuevo = {
            "id": listaProductos.length+1,
            "name": req.body.nombreProducto,
            "description": req.body.descripcion,
            "price": req.body.precio,
            "discount": 27,
            "image": req.body.imagen,
            "category": req.body.categoria
        }
        listaProductos.push(comboNuevo)
        fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(listaProductos, null, 2), 'utf-8');
        res.redirect('/')
    },
    productEdit: (req, res) => {
        res.render('productEdit')
    }
}

module.exports = controller