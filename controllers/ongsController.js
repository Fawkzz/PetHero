const ongsController = {
    index: (req, res) => {
    let ongs = [
        {        
            "nomeDaOng":"SOS ANIMAIS",
            "nome":"Bruno",
            "sobrenome":"Fonseca",
            "telefone":"(11)900000000",
            "email":"bruno@sosanimais.com",
            "cep":"00000000",
            "estado":"SP",
            "cidade":"Diadema",
            "bairro":"Centro",
            "logradouro":"Rua Teste",
            "numero":"001",
            "complemento":"bloco 10 - apt 39",
            "descricao":"Instituição destinada a causa animal",
        }
        ]
       res.render("ongs", {ongs: ongs})
    }
}
module.exports = ongsController;