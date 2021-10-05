const {validationResult} = require('express-validator');

    let ongs = [
        {   "id": "o1",     
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
<<<<<<< Updated upstream
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
=======
const ongsController = {
    viewForm: (req, res) => {
       res.render("cadastrarOngs", {sucess: false, error: false})
    },

    salvarForm: (req, res) => {
        let listaDeErros = validationResult(req)
        if(!listaDeErros.isEmpty()){
            const alert = listaDeErros.array()
            res.render("cadastrarOngs", {alert: alert})
        }

        const nomeDaOng = req.body.nomeDaOng;
        const telefoneOng = req.body.telefone;
        const emailOng = req.body.email;
        const cidadeOng = req.body.cidade;
        const estadoOng = req.body.estado;
        const bairroOng = req.body.bairro;
        const logoOng = req.body.logo;
        const descricaoOng = req.body.descricao;

        ongs.push({
            nomeDaOng: nomeDaOng,
            telefone: telefoneOng,
            email: emailOng,
            cidade: cidadeOng,
            estado: estadoOng,
            bairro: bairroOng,            
            logo: logoOng,
            descricao: descricaoOng,
        })
        res.redirect("listar")

        console.log(ongs)
    },

    listar: (req, res) => {
        res.render('listarOngs', {ongs: ongs})
    },

    editar: (req, res) => {
        const idOngs = req.params.id
        res.render('cadastrarOngs', {ong: ongEncontrada})
    },

    excluir: (req, res) => {
        console.log(req.body)
        res.render('cadastrarOngs', {ong: ongExcluida})
>>>>>>> Stashed changes
    }
}
module.exports = ongsController;