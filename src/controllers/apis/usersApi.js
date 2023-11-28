const db = require('../../database/models');
const controller = {
    list: async (req,res) => {
        let respuesta = {
            count:0,
            users:[]
        }
        let users = await db.Usuario.findAll();
        respuesta.count = users.length;
        respuesta.users = users.map(row =>{
            return{
                id:row.id,
                name:row.name,
                email:row.email,
                detail:'/api/user/profile/'+row.id
                
            }
        })

        res.json(respuesta)

    },
    profile: async (req,res) => {
        let user = await db.Usuario.findByPk(req.params.id,{atributtes:{exclude:['id_roles','password']}})
        let respuesta = {
            ...user,
            url_imagen:'/images/users/'+user.avatar,
        }
        res.json(respuesta)

    }

    


}

module.exports=controller