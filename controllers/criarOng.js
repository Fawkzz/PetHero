const criarOngController = {
    post: (req, res) => {
        console.log(req.body)
        res.render('cadastrarOng', {salvou: true, error: false})
    }
}


module.exports = criarOngController;