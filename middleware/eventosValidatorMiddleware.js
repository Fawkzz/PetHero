var { check } = require("express-validator");


const eventosCreateValidator = [
    check("titulo").isLength({min:3, max:40}).withMessage("O campo título tem que conter no mínimo 3 carcterer."),
    check("data").notEmpty().withMessage("O campo data é obrigatório."),
    check("pais").isLength({min:3, max:40}).withMessage("O campo país tem que conter no mínimo 3 carcterer."),
    check("cidade").isLength({min:3, max:40}).withMessage("O campo país tem que conter no mínimo 3 carcterer."),
    check("local").isLength({min:3, max:40}).withMessage("O campo local tem que conter no mínimo 3 carcterer."),
    check("periodicidade").notEmpty().withMessage("O campo periodicidade é obrigatório."),
    check("alcance").notEmpty().withMessage("O campo alcance é obrigatório."),
    check("setores").notEmpty().withMessage("O campo setores é obrigatório."),
    //check("logo").notEmpty().withMessage("O campo logo é obrigatório."),
    //check("descricao").isLength({min:150, max:1000}).withMessage("O campo descrição tem que conter no mínimo 150 caracterer e no máximo 1000.")
];

module.exports = {eventosCreateValidator}