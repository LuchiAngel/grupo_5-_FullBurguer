const path = require('path');
let fs = require('fs');
const bcrypt = require('bcryptjs');
const User = require('../models/User')
const { validationResult } = require('express-validator');
let listaUsuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));

const usersController = {

    register: (req, res) => {
        res.render('register')
    },

    login: (req, res) => {
        res.render('login')
    },
    loginProcess: (req, res) => {
        const userToLogin = User.findByField('email', req.body.email);
        if (userToLogin) {
            let itsOkThePasword = bcrypt.compareSync(req.body.password, userToLogin.password)
            if (itsOkThePasword) {
                req.session.userLogged = userToLogin;
                //console.log(userToLogin)
                return res.redirect('/')

            } return res.render('login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son incorrectas'
                    }
                }
            })

        } return res.render('login', {
            errors: {
                email: {
                    msg: 'El email no se encuentra registrado'
                }
            }
        })
    },

    registerProcess: (req, res) => {
        const errors = validationResult(req);
        let userInDB = User.findByField('email', req.body.email);

        if (userInDB) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                }, oldData: req.body
            });
        } let usuarioNuevo = {
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
    profile:(req, res)=>{
        return res.render('profile',{
            user: req.session.userLogged
        })
    },
    logout:(req, res)=>{
    req.session.destroy();
    return res.redirect ('/');
    }
}
    

module.exports = usersController