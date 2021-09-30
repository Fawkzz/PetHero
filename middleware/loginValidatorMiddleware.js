var { check } = require("express-validator");


const loginValidator = [
    check("email").isEmail().notEmpty().withMessage("O campo email é obrigatório."),
    check("password").notEmpty().withMessage("O campo senha é obrigatório.")
];

const esqueceuLoginValidator = [
    check("email").isEmail().notEmpty().withMessage("O campo email é obrigatório.")
];


const createLoginValidator = [
    check("nome").isLength({min:3, max:40}).withMessage("O campo nome tem que conter no mínimo 3 carcterer."),
    check("sobrenome").notEmpty().withMessage("O campo sobrenome é obrigatório."),
    check("cpf").isLength({min:3, max:40}).withMessage("O campo cpf tem que conter no mínimo 3 carcterer."),
    check("celular").isLength({min:3, max:40}).withMessage("O campo celular tem que conter no mínimo 3 carcterer."),
    check("data").isDate().notEmpty().withMessage("O campo data tem que conter no mínimo 3 carcterer."),
    check("email").isEmail().notEmpty().withMessage("O campo email é obrigatório."),
    check("confirmationEmail").isEmail().notEmpty().withMessage("O campo email é obrigatório."),
    check("password").notEmpty().withMessage("O campo senha é obrigatório."),
    check("confirmationPassword").notEmpty().withMessage("O campo senha é obrigatório."),
]

module.exports = {loginValidator, createLoginValidator, esqueceuLoginValidator}