module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario',{
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        tableName: 'usuarios',
        timestamps: false
    });
    return Usuario;    
}