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
    return Factura;
}
