module.exports = (sequelize, DataTypes) => {
    const Ong = sequelize.define("Ong", {
            nomeDaOng: DataTypes.STRING(40),
            telefone: DataTypes.STRING(40),
            email: DataTypes.STRING(40),
            cidade: DataTypes.STRING(40),
            estado: DataTypes.STRING(40),
            bairro: DataTypes.STRING(20),
            logo: DataTypes.STRING(20),
            descricao: DataTypes.STRING(400)
            },{
            tableName: "ongs",
            timestamps: true,
            paranmoid: true
        });
    return Ong
}