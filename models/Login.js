module.exports = (sequelize, DataTypes) => {
    const Login = sequelize.define("Login", {
        nome: DataTypes.STRING(40),
        sobrenome: DataTypes.STRING(40),
        cpf: DataTypes.STRING(40),
        data: DataTypes.DATE,
        celular: DataTypes.STRING(40),
        email:DataTypes.STRING(40),
        confirmationEmail: DataTypes.STRING(40),
        password: DataTypes.STRING(40),
        confirmationPassword: DataTypes.STRING(40)
        
    }, {
        tableName: "Login",
        timestamps: true,
        paranoid: true
    });
    return Login
}