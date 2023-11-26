const path = require('path')
let fs = require('fs');



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