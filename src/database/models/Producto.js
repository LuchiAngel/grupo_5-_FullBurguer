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
        },
        created_at: {
            type: dataTypes.DATE,
            defaultValue: dataTypes.NOW,
            allowNull: false,
        },
        updated_at: {
            type: dataTypes.DATE,
            defaultValue: dataTypes.NOW,
            allowNull: false,
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
 /* Producto.associate=function(models){
        Producto.belongsTo(models.Tipo,{
            foreignKey: 'id_categoria',
            as: 'categoria'
        })
}*/
    return Producto;
}