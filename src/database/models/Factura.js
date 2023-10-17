module.exports = (sequelize, dataTypes) => {
    let alias = 'Factura';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        fecha:{
            type: dataTypes.DATE
        },
        subtotal: {
            type: dataTypes.DECIMAL(8, 2)
        },
        discount:{
            type: dataTypes.INTEGER 
        },
        total: {
            type: dataTypes.DECIMAL(8, 2)
        },
        id_usuario:{
            type: dataTypes.INTEGER 
        }
    };


    let config = {
        tableName: "Facturas",
        timestamps: false
    };

    const Factura = sequelize.define(alias, cols, config);
    Factura.associate = function(models) {        
        Factura.belongsToMany(models.Producto,{            
            as:"productos",
            through: "producto_factura",
            foreignKey:"id_facturas",
            otherKey:"id_productos"
        })
    }
    return Factura;
}
