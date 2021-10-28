module.exports = (sequelize, DataTypes) => {
    const Evento = sequelize.define("Evento", {
            titulo: DataTypes.STRING(40),
            data_evento: DataTypes.DATE,
            pais: DataTypes.STRING(40),
            cidade: DataTypes.STRING(40),
            local_evento: DataTypes.STRING(40),
            periodicidade: DataTypes.STRING(20),
            alcance: DataTypes.STRING(20),
            setores: DataTypes.STRING(20),
            descricao: DataTypes.STRING(400),
            imagem: DataTypes.STRING(400)
        },{
            tableName: "eventos",
            timestamps: true,
            paranmoid: true
        });
    return Evento
}