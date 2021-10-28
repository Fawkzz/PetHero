module.exports = (sequelize, DataTypes) => {
    const Contato = sequelize.define("Contato", {
            nomeContato: DataTypes.STRING(40),
            tipo_msgContato: DataTypes.STRING(40),
            email: DataTypes.STRING(40),
            telefone: DataTypes.STRING(40),
            descricao: DataTypes.STRING(255),
            logo: DataTypes.STRING(255)
        },{
            tableName: "contatos",
            timestamps: true,
            paranoid: true
        });
    return Contato
}