const eventosController = {
    post: (req, res) => {
        console.log(req.body)
        res.render('cadastrarEventos', {salvou: true, error: false})
    }
}


module.exports = eventosController;