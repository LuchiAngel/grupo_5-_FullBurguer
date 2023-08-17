const path = require ('path')

const controller = {
    index: (req,res) =>{
        return res.sendFile(path.resolve(__dirname,'../views/index.html'))
    },

    productCart: (req,res) =>{
        return res.sendFile(path.resolve(__dirname,'../views/productCart.html'))
    },
    productDetail: (req,res) =>{
        return res.sendFile(path.resolve(__dirname,'../views/productDetail.html'))
    },
    register: (req,res) =>{
        return res.sendFile(path.resolve(__dirname,'../views/register.html'))
    },
    login: (req,res) =>{
        return res.sendFile(path.resolve(__dirname,'../views/login.html'))
    }
}

module.exports=controller