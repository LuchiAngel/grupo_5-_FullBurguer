module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DECIMAL(10,2)
        },
        discount: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
        },
        borrado: {
            type: dataTypes.BOOLEAN
        },
        images: {
            type: dataTypes.STRING
        },   
        id_categoria: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "Productos",
        timestamps: false
    };

    const Producto = sequelize.define(alias, cols, config);
    return Producto;
}