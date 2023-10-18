module.exports = (sequelize, dataTypes) => {
    let alias = 'Roles';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING        
        }
    };


    let config = {
        tableName: "Roles",
        timestamps: false
    };

    const Roles = sequelize.define(alias, cols, config);
    Roles.associate = function(models) {
        Roles.hasMany(models.Usuario,{
            foreignKey:"id_roles",
            as:"usuarios"
        })
    }

    return Roles;
}
