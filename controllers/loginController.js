const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const usuarios = []

const loginController = {
    loginView: (req, res) => {
         res.render("login")
    },
    loginPost: (req, res) => {
        let listaDeErros = validationResult(req)
        if(!listaDeErros.isEmpty()){
            const alert = listaDeErros.array()
            res.render("login", {alert: alert})
        }
        const email = req.body.email;
        const password = req.body.password;

        const usuarioLogado = usuarios.find((usuario)=>usuario.email == email && bcrypt.compareSync(password, usuario.password)) 
        if (usuarioLogado != null) {
            req.session.usuario_logado= true
            res.redirect("/")
        }else{
            res.render("login")
        }
    },

    esqueceuSenhaView: (req, res) => {
        res.render("esqueceuSenha")
    },
    esqueceuSenhaPost: (req, res) => {
        let listaDeErros = validationResult(req)
        if(!listaDeErros.isEmpty()){
            const alert = listaDeErros.array()
            return res.render("esqueceuSenha", {alert: alert})
        }
        const email = req.body.email;

        eventos.push({
            email: email
        })
        res.render("esqueceuSenha")
    },

   registrarView: (req, res) => {
     res.render("registrarLogin")
   },

   registrarCreatePost: (req, res) => {
    let listaDeErros = validationResult(req)
    if(!listaDeErros.isEmpty()){
        const alert = listaDeErros.array()
        res.render("registrarLogin", {alert: alert})
    }
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const cpf = req.body.cpf;
    const celular = req.body.celular;
    const data = req.body.data;
    const email = req.body.email;
    const confirmationEmail = req.body.confirmationEmail;
    const password = req.body.password;
    const confirmationPassword = req.body.confirmationPassword;

    usuarios.push({
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        data: data,
        celular: celular,
        email: email,
        confirmationEmail: confirmationEmail,
        password: bcrypt.hashSync(password, 12),
        confirmationPassword: bcrypt.hashSync(confirmationPassword, 12)
    })

    console.log(usuarios)
    res.redirect("/login")        
   },

   logout: (req, res) =>{
       req.session.usuario_logado =false;
       res.redirect("/login")
   }
}

module.exports = loginController;