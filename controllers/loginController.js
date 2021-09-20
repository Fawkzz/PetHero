const loginController = {
    index: (req, res) => {
         res.render("login")
    },
    esqueceu: (req, res) => {
        res.render("esqueceuSenha")
   } 
}

module.exports = loginController;