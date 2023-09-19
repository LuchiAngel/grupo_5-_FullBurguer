const path = require('path');
let fs = require('fs');
<<<<<<< HEAD
const bcrypt = require('bcrypt');
//const { validationResult } = require('express-validator');



=======
const bcrypt = require('bcryptjs');
const User = require ('../models/User')
const { validationResult } = require('express-validator');
>>>>>>> c4b96f6cd7e57a6b3fde3aaac9f358eba7190019
let listaUsuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));


const usersController = {


    register: (req, res) => {
        res.render('register')
    },

    

    /*login: (req, res) => {
        res.render('login')
    },/*
    loginProcess:(req,res) =>{
         const userEncontrado = listaUsuarios.find((user) => user.id== req.params.id)
       let usuarioLogin = userEncontrado('email, req.body.email');
    if(usuarioLogin){
    let okPassword= bcrypt.compareSync(req.body.password, usuarioLogin.password)
    if(okPassword){
        res.redirect('index')
    }
    
    
    }return res.render('login', {errors:{email:{msg: 'No se encuentra éste email entre nuestros usuarios'}}})
    },*/


    registerProcess: (req, res) => {
        const errors = validationResult(req);
      let userInDB = User.findByField('email', req.body.email);
      
    if (userInDB){
    return res.render('register', {
        errors:{
            email:{
                msg: 'Este email ya está registrado'
    }
}, oldData: req.body});
}          let usuarioNuevo = {
            "id": listaUsuarios.length + 1,
            "name": req.body.nombre,
            "birthdate": req.body.fecha,
            "address": req.body.address,
            "email": req.body.email,
            "password": bcrypt.hashSync(req.body.password, 10),
            "category": "admin",
            "avatar": req.file ? req.file.filename : 'Logo.png',
        }

        listaUsuarios.push(usuarioNuevo)
        fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(listaUsuarios, null, 2), 'utf-8');
        
        res.render('index');

    },
}

module.exports = usersController