var { check } = require("express-validator");


const ongsCreateValidator = [
    check("nome").notEmpty().withMessage("O campo nome é obrigatório."),
    check("sobrenome").notEmpty().withMessage("O campo sobrenome é obrigatório."),
    check("email").isEmail().withMessage("O campo e-mail precisa ter um endereço válido."),
    check("telefone").isLength({min:10, max:11}).withMessage("O campo telefone tem que conter no mínimo 10 caracteres, inclua o ddd sem o número 0 na frente."),
    check("cep").isLength({min:8, max:8}).withMessage("O cep local tem que conter 8 caracteres."),
    check("estado").notEmpty().withMessage("O campo estado é obrigatório."),
    check("logradouro").notEmpty().withMessage("O campo logradouro é obrigatório."),
    check("numero").notEmpty().withMessage("O campo número é obrigatório."),
    //check("complemento").withMessage("O campo complemento não é obrigatório."),
    //check("descricao").isLength({min:50, max:1000}).withMessage("O descrição tem que conter no mínimo 50 caracteres."),
    check("cidade").notEmpty().withMessage("O campo cidade é obrigatório."),
    
    //check("logo").notEmpty().withMessage("O campo logo é obrigatório."),
    //check("descricao").isLength({min:150, max:1000}).withMessage("O campo descrição tem que conter no mínimo 150 caracterer e no máximo 1000.")
];

module.exports = {ongsCreateValidator}