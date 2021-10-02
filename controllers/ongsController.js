const ongsController = {
    listar: (req, res) => {
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
       res.render("listarOng", {ongs: ongs})
    },
    post: (req, res) => {
        console.log(req.body)
        res.render('cadastrarOng', {success: true, error: false})
    },
 
    cadastrar: (req, res) => {
       /* const caminhoImagem = req.file.path;
        listarOngs.push({
            imagem: caminhoImagem
        })*/
        res.render("cadastrarOng")
    }
}
module.exports = ongsController;