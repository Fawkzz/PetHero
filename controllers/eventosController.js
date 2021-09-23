const eventosController = {
    post: (req, res) => {
        console.log(req.body) 
        
        if (condition) {
            res.render('cadastrarEventos', {success: false, error: true})
        }
        res.render('cadastrarEventos', {success: true, error: false})
    },
  
    listar: (req, res) => {
        let feiras = [
            {        
                "titulo": "EXPO PRADO",
                "segmento": "agrícola, animais de estimaçao, Agricultura, Gado, Máquinas Agrícolas, Pecuária e Pecuarista.",
                "data" : "De sexta 10 até domingo 19 setembro 2021",                
                "imagem" : "/images/expoPrado.jpg",
                "setores": "agrícola animais de estimaça",
                "periodicidade": "Anual",
                "alcance": "Nacional",
                "edição" : "Setores: agrícola animais de estimaçao Periodicidade: anual Alcance Nacional",
                "descricaoFeira" : "Com mais de 100 questões sobre as suas costas, Expo Prado é um marco para as empresas e profissionais ligados à pecuária e agricultura. Esta sala, a indústria mais importante do Uruguai, reunidos no mesmo espaço o mais recente em suprimentos, equipamentos e máquinas, pecuária e agronegócio, e intensificar o intercâmbio de conhecimentos e relações comerciais entre os seus participantes."
            },
            {        
                "titulo": "FENAGRA",
                "segmento": "agrícola, animais de estimaçao, Aditivos, Alimentos Orgânicos, Indústria da Alimentação, Pecuária",
                "data" : "De terça 21 até quinta 23 setembro 2021",                
                "imagem" : "/images/fenagra.png",
                "setores": "agrícola animais de estimaçao, Aditivos, Alimentos Orgânicos, Indústria da Alimentação, Pecuária",
                "periodicidade": "Anual",
                "alcance": "Nacional",
                "edição" : "De terça 21 até quinta 23 setembro 2021, Local: Expo D. Pedro, Mais informação: FENAGRA",
                "descricaoFeira" : "A FENAGRA é uma feira e congresso que reúnem os principais players da cadeia produtiva de Graxarias, possibilitando maior interação entre os mercados da indústria Pet Food com as indústrias de farinhas e gorduras animais.                Os participantes são Fabricantes de Alimentos Fabricantes de Alimentos Pet Food, Fabricantes de Máquinas e Equipamentos, Insumos e Matérias Primas, Palatabilizantes, Graxarias, Frigoríficos, Prestadores de Serviços, Corantes, Aromas, Ingredientes, Embalagens, Vitaminas, Leveduras, Atacadistas e etc."
            },
            {        
                "titulo": "ParkZoo Moscow",
                "segmento": "agrícola, animais de estimaçao, Aditivos, Alimentos Orgânicos, Indústria da Alimentação, Pecuária",
                "data" : "e quarta 22 até sexta 24 setembro 2021",                
                "imagem" : "/images/parkzoo.png",
                "setores": "Alimentos, animais de estimaçao, Exposição de Animais",
                "periodicidade": "Anual",
                "alcance": "Internacional",
                "edição" : "De quarta 22 até sexta 24 setembro 2021. Local: Sokolniki Culture and Exhibition Center. Cidade: Moscou. País: Rússia. Mais informação: ParkZoo Moscow",
                "descricaoFeira" : "Sem descrição"
            },
            {        
                "titulo": "Petfood forum",
                "segmento": "agrícola, animais de estimaçao, Aditivos, Alimentos Orgânicos, Indústria da Alimentação, Pecuária",
                "data" : "De quarta 22 até sexta 24 setembro 2021",                
                "imagem" : "/images/petfood.png",
                "setores": "animais de estimaçao, Refeição",
                "periodicidade": "Anual",
                "alcance": "Internacional",
                "edição" : "De quarta 22 até sexta 24 setembro 2021, Local: Kansas City Convention Center, Cidade: Kansas City, País: EUA, Mais informação: Petfood forum",
                "descricaoFeira" : "Sem descrição"
            },
            {        
                "titulo": "atuttacoda",
                "segmento": "agrícola, animais de estimaçao, Aditivos, Alimentos Orgânicos, Indústria da Alimentação, Pecuária",
                "data" : "e domingo 26 até segunda 27 setembro 2021",                
                "imagem" : "/images/atuttacoda.png",
                "setores": "animais de estimaçao",
                "periodicidade": "Anual",
                "alcance": " Internacional",
                "edição" : "De terça 21 até quinta 23 setembro 2021, Local: Expo D. Pedro, Mais informação: FENAGRA",
                "descricaoFeira" : "De domingo 26 até segunda 27 setembro 2021, Local: Lingotto Fiere, Cidade: Torino, País: Itália, Mais informação: Atuttacoda"
            },
            {        
                "titulo": "Pet show london",
                "segmento": "animais de estimaçao, Exposição de Animais",
                "data" : "De sábado 18 até domingo 19 setembro 2021",                
                "imagem" : "/images/nationalPetShow.jpg",
                "setores": "animais de estimaçao, Exposição de Animais",
                "periodicidade": "Anual",
                "alcance": "Nacional",
                "edição" : "De sábado 18 até domingo 19 setembro 2021, Local: Cirencester Park, Cidade: Cirencester, País: Reino Unido, Mais informação: National Pet Show London",
                "descricaoFeira" : "O London Pet Show é um evento dinâmico, vivo, cheio de centenas de diferentes raças de animais, mostra surpreendente e divertido e palestras informativas e demonstrações. A mostra inclui zonas onde a descobrir com cães, gatos, pequenos furries, exóticas e aquáticas e animais de estimação. É a oportunidade perfeita para os amantes de animais para desfrutar de um dia cercado a minha todos os tipos de animais de estimação, e encontrar todos os tipos de gadgets e acessórios para os seus cuidados e de entretenimento. O evento incluirá um grande número de atrações, competições e exposições."
            }
            ]
            res.render("listarEventos", {feiras: feiras})
    },
    
    cadastrar: (req, res) => {
        console.log(req.body)        
        res.render('cadastrarEventos', {success: false, error: false})
    }    
}


module.exports = eventosController;