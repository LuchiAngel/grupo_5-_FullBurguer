const path = require('path');
let fs = require('fs');
const db = require('../database/models');
const { profile } = require('console');
const sequelize = db.sequelize;
const Usuario = db.Usuario;
const roles = db.Roles;
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const{validate}=require("../middleware/registerMiddleware");


const usersController = {


    login: (req, res) => {
        res.render('login')
    },
    loginProcess: async (req, res) => {
        const userToLogin = await db.Usuario.findOne({
            where: {
                email: req.body.email
            }
        });
        if (userToLogin) {
            let itsOkThePasword = bcrypt.compareSync(req.body.password, userToLogin.password)
            if (itsOkThePasword) {
                req.session.userLogged = userToLogin;
                if (req.body.rememberUser) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 90) * 2 })
                }


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
    }, register: async (req, res) => {
        const roles = await db.Roles.findAll();
        res.render('register', { roles })
    },

    registerProcess: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
           
            return res.render('register', {
              errors: errors.array(),
              oldData: req.body,
            });
          }

        let userInDB = await db.Usuario.findOne({
            where: {
                email: req.body.email
            }
        });

        if (userInDB) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                }, oldData: req.body
            });
        } 
      
        const usuarioNuevo = await db.Usuario.create({

            "name": req.body.nombre,
            "birthday": req.body.fecha,
            "address": req.body.address,
            "email": req.body.email,
            "password": bcrypt.hashSync(req.body.password, 10),
            "id_roles": req.body.id_roles,
            "avatar": req.file ? req.file.filename : "predeterminada.jpg",
        })


        res.render('index');
        
    },
    profile: async (req, res) => {
        let usuario = await db.Usuario.findByPk(req.params.id)
        res.render('profile', { Usuario: usuario })
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },


    editUsers: async function (req, res) {
        const usuario = await db.Usuario.findByPk(req.params.id)
        const roles = await db.Roles.findAll();
        res.render('usersEdit', { Usuario: usuario, roles })
    },


    editProcess: async function (req, res) {
        const usuario = await db.Usuario.findByPk(req.params.id)
        const usuarioEditado = await db.Usuario.update({

            "name": req.body.name,
            "birthday": req.body.birthday,
            "address": req.body.address,
            "avatar": req.file ? req.file.filename : "predeterminada.jpg",
            "borrado": false,
        }, { where: { id: req.params.id } })

        console.log(usuarioEditado);

        res.redirect('/product/list');
    },
    delete: async function (req, res) {
        const usuario = await db.Usuario.findByPk(req.params.id)
        const roles = await db.Roles.findAll();
        res.render('usersEdit', { Usuario: usuario, roles })
    },
    deleteProcess: async (req, res) => {
        const usuarioEliminado = await db.Usuario.destroy({ where: { id: req.params.id } })
        req.session.destroy();
        console.log(usuarioEliminado);
        res.redirect("/")
    },
    restore: async (req, res) => {
        const usuarioRestaurado = await db.Usuario.restore({ where: { id: req.params.id } })
        console.log(usuarioRestaurado);
        res.redirect("/login")
    },

}

module.exports = usersController