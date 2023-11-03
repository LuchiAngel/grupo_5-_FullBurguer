module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';  
    const Tipo= require ('./Tipo');
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING,
           /* validate: {
                len: [5, 255] // debera tener al menos 5 caracteres
            }*/
        },
        price: {
            type: dataTypes.DECIMAL(10,2)
        },
        discount: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING,
            /*validate: {
                len: [20, 255] // debera tener al menos 20 caracteres
            }*/
        },
        borrado: {
            type: dataTypes.BOOLEAN
        },
        images: {
            type: dataTypes.STRING,
            /*validate: {
                is: /\.(jpg|jpeg|png|gif)$/i // debera ser un archivo válido JPG,JPEG,PNG,GIF
            }*/
        },   
        id_categoria: {
            type: dataTypes.INTEGER,
            allowNull:false,
            references:{
                model: Tipo,
                key:'id'
            }
        },
        created_at: {
            type: dataTypes.DATE,
            defaultValue: dataTypes.NOW,
            allowNull: false,
        },
        updated_at: {
            type: dataTypes.DATE,
            defaultValue: dataTypes.NOW,
            allowNull: true,
        },
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        
    };

    let config = {
        tableName: "Productos",
        timestamps: true,
        paranoid: true,
        deletedAt: 'deleted_at',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    };

    const Producto = sequelize.define(alias, cols, config);
  
    Producto.associate=function(models){
       
        Producto.belongsTo(models.Tipo,{
            foreignKey:"id_categoria",
            as:"tipos"
        })

        //Relacion Producto Factura
        Producto.belongsToMany(models.Factura,{            
            as:"facturas",
            through: "productos_factura",
            foreignKey:"id_productos",
            otherKey:"id_facturas"
        })
}

    return Producto;
}