const path = require('path');
let fs = require('fs');
const db = require('../database/models');
const { profile } = require('console');
const sequelize = db.sequelize;
const Usuario = db.Usuario;
const roles = db.Roles;
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');



const usersController = {
   

    login: (req, res) => {
        res.render('login')
    },
    loginProcess: async (req, res) => {
        const userToLogin = await db.Usuario.findOne({
            where:{
                email: req.body.email
            }
        });
        if (userToLogin) {
            let itsOkThePasword = bcrypt.compareSync(req.body.password, userToLogin.password)
            if (itsOkThePasword) {
                req.session.userLogged = userToLogin;
              if(req.body.rememberUser){
                res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60)*2})
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
    }, register: async(req, res) => {
        const roles= await db.Roles.findAll();
        res.render('register', {roles})
    },

    registerProcess: async(req, res) => {
        const errors = validationResult(req);
        
        let userInDB = await db.Usuario.findOne({
            where:{
                email: req.body.email
            }});

        if (userInDB) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                }, oldData: req.body
            });
        } const usuarioNuevo = await db.Usuario.create ({
            "name": req.body.nombre,
            "birthday": req.body.fecha,
            "address": req.body.address,
            "email": req.body.email,
            "password": bcrypt.hashSync(req.body.password, 10),
            "id_roles": "admin",
            "avatar": req.file ? req.file.filename : "predeterminada.jpg",
        })


        res.render('index');

    },
    profile:(req, res)=>{
        return res.render('profile',{
            user: req.session.userLogged
        })
    },
    logout:(req, res)=>{
        res.clearCookie('userEmail');
        req.session.destroy();
    return res.redirect ('/');
    },
        
    editUsers: async (req, res) => {
        let usuario = await db.Usuario.findByPk(req.params.id)
        const roles =  await db.Roles.findAll();
        res.render('usersEdit' , {Usuario:usuario})
    },

    editProcess:  async (req, res) => {
        const usuarioEditado = await db.Usuario.update({
            "name": req.body.nombre,
            "birthday": req.body.fecha,
            "address": req.body.domicilio,
            "avatar": req.file ? req.file.filename : "predeterminada.jpg",
            "borrado": false,
        }, {where:{
            id: req.params.id} })

            console.log(usuarioEditado)
                res.redirect('/users/profile')
    },

}

        

module.exports = usersController