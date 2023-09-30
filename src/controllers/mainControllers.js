const path = require('path')
let fs = require('fs');


let listaProductos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8'));

const controller = {
    index: (req, res) => {
        res.render('index')
    },


    register: (req, res) => {
        res.render('register')
    },
    login: (req, res) => {
        res.render('login')
    },

}

module.exports = controller