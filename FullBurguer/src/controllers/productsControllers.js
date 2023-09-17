const path = require('path')
let fs = require('fs');


let listaProductos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8'));

const productsControllers = {
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
        res.redirect('list')
    },
    edit: (req, res) => {
        let comboEncontrado = listaProductos.find((combo) => combo.id == req.params.id)
        res.render('productEdit', { combo: comboEncontrado })
    }, /*A REVISAR*/
    /*editProcess: (req, res) => {
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
    res.redirect('list')
    },
    recuperarProcess: (req, res) => {
        let comboEncontrado = listaProductos.find((combo) => combo.id == req.params.id)

        comboEncontrado.borrado = false

    fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(listaProductos, null, 2), 'utf-8');
    res.redirect('list')
    }*/

}


module.exports = productsControllers