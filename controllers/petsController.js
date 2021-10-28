const { validationResult } = require("express-validator");

let eventos = [
    {    
        "id" : "1",
        "titulo": "EXPO PRADO",
        "data" : "De sexta 10 até domingo 19 setembro 2021",
        "pais" : "Brasil",
        "cidade": "Belo Horizonte",
        "Local": "Expo Minas",               
        "setores": "agrícola animais de estimaça",
        "periodicidade": "Anual",
        "alcance": "Nacional",
        "logo" : "/images/expoPrado.jpg",
        "descricao" : "Com mais de 100 questões sobre as suas costas, Expo Prado é um marco para as empresas e profissionais ligados à pecuária e agricultura. Esta sala, a indústria mais importante do Uruguai, reunidos no mesmo espaço o mais recente em suprimentos, equipamentos e máquinas, pecuária e agronegócio, e intensificar o intercâmbio de conhecimentos e relações comerciais entre os seus participantes."
    },
    {      
        "id" : "2",  
        "titulo": "FENAGRA",
        "data" : "De terça 21 até quinta 23 setembro 2021",
        "pais" : "Brasil",
        "cidade": "Belo Horizonte",
        "Local": "Expo Minas",                    
        "setores": "agrícola animais de estimaçao, Aditivos, Alimentos Orgânicos, Indústria da Alimentação, Pecuária",
        "periodicidade": "Anual",
        "alcance": "Nacional",
        "logo" : "/images/fenagra.png",
        "descricao" : "A FENAGRA é uma Evento e congresso que reúnem os principais players da cadeia produtiva de Graxarias, possibilitando maior interação entre os mercados da indústria Pet Food com as indústrias de farinhas e gorduras animais.                Os participantes são Fabricantes de Alimentos Fabricantes de Alimentos Pet Food, Fabricantes de Máquinas e Equipamentos, Insumos e Matérias Primas, Palatabilizantes, Graxarias, Frigoríficos, Prestadores de Serviços, Corantes, Aromas, Ingredientes, Embalagens, Vitaminas, Leveduras, Atacadistas e etc."
    },
    {       
        "id" : "2", 
        "titulo": "ParkZoo Moscow",
        "data" : "e quarta 22 até sexta 24 setembro 2021",
        "pais" : "Rússia",
        "cidade": "Moscou",
        "Local": "Sokolniki Culture and Exhibition Center",                
        "setores": "Alimentos, animais de estimaçao, Exposição de Animais",
        "periodicidade": "Anual",
        "alcance": "Internacional",
        "logo" : "/images/parkzoo.png",
        "descricao" : "Sem descrição"
    },
    {    
        "id" : "3",    
        "titulo": "Petfood forum",
        "data" : "De quarta 22 até sexta 24 setembro 2021", 
        "pais" : "EUA",
        "cidade": "Kansas City",
        "Local": "Kansas City Convention Center",                
        "periodicidade": "Anual",
        "alcance": "Internacional",
        "setores": "agrícola, animais de estimaçao, Aditivos, Alimentos Orgânicos, Indústria da Alimentação, Pecuária",
        "logo" : "/images/petfood.png",
        "descricao" : "Sem descrição"
    },
    {     
        "id" : "3",   
        "titulo": "atuttacoda",
        "data" : "e domingo 26 até segunda 27 setembro 2021",
        "pais" : "Itália",
        "cidade": "Torino",
        "Local": "Lingotto Fiere",               
        "periodicidade": "Anual",
        "alcance": " Internacional",
        "setores": "animais de estimaçao",
        "logo" : "/images/atuttacoda.png",
        "descricao" : "De domingo 26 até segunda 27 setembro 2021, Local: Lingotto Fiere, Cidade: Torino, País: Itália, Mais informação: Atuttacoda"
    },
    {        
        "id" : "4",
        "titulo": "Pet show london",
        "data" : "De sábado 18 até domingo 19 setembro 2021",
        "pais" : "Reino Unido",
        "cidade": "Cirencester",
        "Local": "Cirencester Park",
        "periodicidade": "Anual",
        "alcance": "Nacional",
        "setores": "animais de estimaçao, Exposição de Animais",
        "logo" : "/images/nationalPetShow.jpg",
        "descricao" : "O London Pet Show é um evento dinâmico, vivo, cheio de centenas de diferentes raças de animais, mostra surpreendente e divertido e palestras informativas e demonstrações. A mostra inclui zonas onde a descobrir com cães, gatos, pequenos furries, exóticas e aquáticas e animais de estimação. É a oportunidade perfeita para os amantes de animais para desfrutar de um dia cercado a minha todos os tipos de animais de estimação, e encontrar todos os tipos de gadgets e acessórios para os seus cuidados e de entretenimento. O evento incluirá um grande número de atrações, competições e exposições."
    }
]

const petsController = {
    viewForm: (req, res) => {      
        res.render('cadastrarPets', {success: false, error: false})
    },

    salvarForm: (req, res) => {
        let listaDeErros = validationResult(req)
        if(!listaDeErros.isEmpty()){
            const alert = listaDeErros.array()
            res.render("cadastrarPets", {alert: alert})
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

        eventos.push({
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

        console.log(eventos)
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

module.exports = petsController;