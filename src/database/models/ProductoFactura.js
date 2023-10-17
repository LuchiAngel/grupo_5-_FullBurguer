module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductoFactura';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        id_productos: {
            type: dataTypes.INTEGER
        },
        id_factura: {
            type: dataTypes.INTEGER
        },
        precio:{
            type: dataTypes.DECIMAL(8,2) 
        },
        cantidad: {
            type: dataTypes.INTEGER 
        }

    };


    let config = {
        tableName: "productos_factura",
        timestamps: false
    };

    const ProductoFactura = sequelize.define(alias, cols, config);

    


    return ProductoFactura;
}