module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        birthday: {
            type: dataTypes.DATE
        },
        address: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        category: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },   
        id_roles: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "Usuarios",
        timestamps: false
    };

    const Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function(models) {
        Usuario.hasMany(models.Factura,{
            foreignKey:"id",
            as:"facturas"
        })
        Usuario.belongsTo(models.Roles,{
            foreignKey:"id",
            as:"roles"
        })
    }

    return Usuario;
}
