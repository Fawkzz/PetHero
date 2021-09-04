const homeController = {
    index: (req, res) => {
    let pets = [
        {        
            "raca": "cachorro",
            "nome" : "Fred",
            "descricao" : "I am a very simple card. I am good at containing small bits of informationcontaining small containing small containing small containing small .",
            "imagem" : "/images/dog1.jpg"
        },
        {        
            "raca": "cachorro",
            "nome" : "Pimpão",
            "descricao" : "I am a very simple card. I am good at containing small bits of infocontaining small containing small rmation.",
            "imagem" : "/images/dog2.jpg"
        },
        {        
            "raca": "cachorro",
            "nome" : "Lilo",
            "descricao" : "I am a very simple card. I am good at containing small bits of information.containing small containing small ",
            "imagem" : "/images/dog3.jpg"
        },
        {        
            "raca": "gato",
            "nome" : "Lala",
            "descricao" : "I am a very simple card. I am good at containing small bits of informationcontaining small .",
            "imagem" : "/images/cat4.jpg"
        },
        {        
            "raca": "gato",
            "nome" : "Husk",
            "descricao" : "I am a very simple card. I am good at containing small bits of information. good at containing smal bits of information",
            "imagem" : "/images/cat2.jpg"
        },
        {        
            "raca": "gato",
            "nome" : "Glen",
            "descricao" : "I am a very simple card. I am good at containing small bit good at containing small bits of informations of information.",
            "imagem" : "/images/cat3.jpg"
        },
        {        
            "raca": "cachorro",
            "nome" : "Elle",
            "descricao" : "I am a very simple card. I am good at containing small bits of info good at containing small bits of information good at containing small bits of informationrmation.",
            "imagem" : "/images/dog7.png"
        },
        {        
            "raca": "cachorro",
            "nome" : "Hof",
            "descricao" : "I am a very simple card. I am good at containing small bits o good at containing small bits of informationf information.",
            "imagem" : "/images/dog6.jpg"
        },
        {        
            "raca": "cachorro",
            "nome" : "Ken",
            "descricao" : "I am a very simple card. I am good at containing small bits of in good at containing small bits ofits of informationformation.",
            "imagem" : "/images/dog8.jpg"
        },
        {        
            "raça": "gato",
            "nome" : "Lila",
            "descricao" : "I am a very simple card. I am good at containing small  good at containing small bits of information good at containingation.",
            "imagem" : "/images/cat5.jpg"
        },
        {        
            "raca": "gato",
            "nome" : "Loli",
            "descricao" : "I am a very simple card. I am good at containing small bits  good at containing small bits of information good at ormation.",
            "imagem" : "/images/cat6.jpg"
        },
        {        
            "raca": "gato",
            "nome" : "Viser",
            "descricao" : "I am a very simple card. I am good at containing small bitsat containing small bits of information good at containing small bits of informationation.",
            "imagem" : "/images/cat7.jpg"
        },
        ]
       res.render("index", {pets: pets})
    }
}

module.exports = homeController;