module.exports = (sequelize, dataTypes) => {
    let alias = 'Tipo';
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
        tableName: "Tipo",
        timestamps: false
    };

    const Tipo = sequelize.define(alias, cols, config);

    return Tipo;
}