const db = require('../../database/models');
const controller = {
    list: async (req, res) => {

        let respuesta = {
            count:0,
            countByTipo:{},
            productos:[]
        }

        const [productos,tipos] = await Promise.all([db.Producto.findAll({include:[{association:'tipos'}]}),db.Tipo.findAll({include:[{association:'productos'}]})])

        respuesta.count = productos.length;
        
        tipos.forEach(tipo => {
            respuesta.countByTipo[tipo.nombre] = tipo.productos.length;
            
        });
        
        respuesta.productos = productos.map(row =>{
            return{
                id:row.id,
                name:row.name,
                description:row.description,
                tipo:row.Tipo,
                detalle: 'api/product/detalle/'+row.id
            }
        })

        res.json(respuesta)
        

    },
    detalle: async (req,res) => {
        let producto = await db.Producto.findByPk(req.params.id)
        let respuesta = {
            ...producto,
            url_imagen:'/images/'+producto.images,
        }
        res.json(respuesta)
        
    }

    


}

module.exports=controller