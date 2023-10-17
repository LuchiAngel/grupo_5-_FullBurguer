const path = require('path');
let fs = require('fs');
const db = require('../database/models');
const { profile } = require('console');
const sequelize = db.sequelize;
const Usuario = db.Usuario;
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');



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
        res.clearCookie('userEmail');
        req.session.destroy();
    return res.redirect ('/');
    },
        
    editUsers: async (req, res) => {
        let usuario = await db.Usuario.findByPk(req.params.id)
        res.render('usersEdit' , {Usuario:usuario})
    },

    editProcess:  async (req, res) => {
        const usuarioEditado = await db.Usuario.update({
            "name": req.body.nombreUsuario,
            "birthday": req.body.fechaNacimiento,
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