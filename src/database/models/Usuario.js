module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    const Roles= require ('./Roles');
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
            type: dataTypes.INTEGER,
            allowNull:false,
            references:{
                model: Roles,
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
        tableName: "Usuarios",
        timestamps: true,
        paranoid: true,
        deletedAt: 'deleted_at',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    };

    const Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function(models) {
        Usuario.hasMany(models.Factura,{
            foreignKey:"id",
            as:"facturas"
        })
        Usuario.belongsTo(models.Roles,{
            foreignKey:"id_roles",
            as:"roles"
        })
    }

    return Usuario;
}
