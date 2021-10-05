var { check } = require("express-validator");


const contatoCreateValidator = [
    check("nome").isLength({min:3, max:50}).withMessage("O campo nome é obrigatório.."),
    check("tipo_msg").notEmpty().withMessage("O campo tipo de mensagem é obrigatório."),
    check("email").isEmail().withMessage("Esse não é um E-mail válido"),
    check("telefone").notEmpty().withMessage("O campo telefone é obrigatório."),    
    check("logo").notEmpty().withMessage("O campo imagem é obrigatório."),
    //check("descricao").isLength({min:150, max:1000}).withMessage("O campo descrição tem que conter no mínimo 150 caracterer e no máximo 1000.")
];

module.exports = {contatoCreateValidator}