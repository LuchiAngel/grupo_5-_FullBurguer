const path = require ('path')

const controller = {
    index: (req,res) =>{
        res.render('index')
    },

    productCart: (req,res) =>{
        res.render('productCart')
    },
    productDetail: (req,res) =>{
        res.render('productDetail')
    },
    register: (req,res) =>{
        res.render('register')
    },
    login: (req,res) =>{
        res.render('login')
    }
}

module.exports=controller