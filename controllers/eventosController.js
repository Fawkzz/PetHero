const { validationResult } = require("express-validator");
const db = require("../models")

const eventosController = {
    viewForm: (req, res) => {  
        const eventosRows = await db.Evento.findAll();
        res.render('listarEventos', {eventos: eventosRows})
    },

    salvarForm: async (req, res) => {
        let listaDeErros = validationResult(req)
        if(!listaDeErros.isEmpty()){
            const alert = listaDeErros.array()
            res.render("cadastrarEventos", {alert: alert})
        }

        const tituloEvento = req.body.titulo;
        const dataEvento = req.body.data;
        const paisEvento = req.body.pais;
        const cidadeEvento = req.body.cidade;
        const localEvento = req.body.local;
        const periodicidadeEvento = req.body.periodicidade;
        const alcanceEvento = req.body.alcance;
        const setoresEvento = req.body.setores;
        const logoEvento = req.body.logo;
        const descricaoEvento = req.body.descricao;

        await db.Evento.create({
            titulo: tituloEvento,
            data: dataEvento,
            pais: paisEvento,
            cidade: cidadeEvento,
            local: localEvento,
            periodicidade: periodicidadeEvento,
            alcance: alcanceEvento,
            setores: setoresEvento,
            logo: logoEvento,
            descricao: descricaoEvento,
        })
        res.redirect("listar")
    },

    
    listar: (req, res) => {
        res.render("listarEventos", {eventos: eventos})
    },

    editar: (req, res) => {
        const idEventos = req.params.id
        res.render('cadastrarEventos', {evento: eventoEncontrado})
    },

    excluir: (req, res) => {
        console.log(req.body)        
        res.render('cadastrarEventos', {evento: eventoExluido})
    }
}

module.exports = eventosController;