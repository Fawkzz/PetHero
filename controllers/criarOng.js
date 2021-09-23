const criarOngController = {
    post: (req, res) => {
        console.log(req.body)
        res.render('cadastrarOng', {success: true, error: true})
    }
}


module.exports = criarOngController;