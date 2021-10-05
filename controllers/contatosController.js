const { validationResult } = require("express-validator");

let contatos = [{
    "id":"1",
    "nome":"bruno fonseca",
    "tipo_msg":"sugestao",
    "email":"brunoaf@outlook.com",
    "telefone":"11988421261",
    "descricao":"daosdhaódhaóhfghfdhausdhapisduahisduaisgdapusidausgdapusdgapsugd",
    "logo":"/imagens/teste.jpg"}
]

const contatosController = {
    viewForm: (req, res) => {      
        res.render('contato', {success: false, error: false})
    },

    salvarForm: (req, res) => {
        let listaDeErros = validationResult(req)
        if(!listaDeErros.isEmpty()){
            const alert = listaDeErros.array()
            res.render("contato", {alert: alert})
        }

        const nomeContato = req.body.nome;
        const tipo_msgContato = req.body.tipo_msg;
        const emailContato = req.body.email;
        const telefoneContato = req.body.telefone;
        const descricaoContato = req.body.descricao;
        const logoContato = req.body.logo;        

        contatos.push({
            nome: nomeContato,
            tipo_msg: tipo_msgContato,
            email: emailContato,
            telefone: telefoneContato,
            descricao: descricaoContato,
            logo: logoContato,
            
        })
        res.send("Formulário enviado com sucesso!")
        console.log(contatos)

    },

    
    listar: (req, res) => {
        res.render("listarContatos", {contatos: contatos})
    },

    editar: (req, res) => {
        const idContato = req.params.id
        res.render('cadastrarContatos', {contato: contatoEncontrado})
    },

    excluir: (req, res) => {
        console.log(req.body)        
        res.render('cadastrarContatos', {contato: contatoExluido})
    }
}

module.exports = contatosController;