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
    productList: (req, res) => {
        res.render('productList', { listaProductos: listaProductos })
    },
    detalle: (req, res) => {
        let comboEncontrado = listaProductos.find((combo) => combo.id == req.params.id)
        res.render('productDetail', { combo: comboEncontrado });

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
            "id": listaProductos.length + 1,
            "name": req.body.nombreProducto,
            "description": req.body.descripcion,
            "price": req.body.precio,
            "discount": 27,
            "images": req.file ? req.file.filename : 'DobleAngus.JPG',
            "category": req.body.categoria
        }
        listaProductos.push(comboNuevo)
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(listaProductos, null, 2), 'utf-8');
        res.redirect('productList')
    },
    productEdit: (req, res) => {
        res.render('productEdit')
    },

}

module.exports = controller