const path = require('path');
let fs = require('fs');
const bcrypt = require('bcrypt');
//const { validationResult } = require('express-validator');



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
        let usuarioNuevo = {
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