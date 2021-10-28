const localStrategy = require("passaport-local").localStrategy
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

//Model de usuario

require("../models/Usuario")
const usuario = mongoose.model("usuarios")

module.exports = function (passaport) {
    passaport.use(new localStrategy({usernameField: "email"}, (email, password, done)=>{
        usuario.findOne({email: email}).then((usuario)=>{
            if(!usuario){
               return done(null, false, {message: "Essa conta nao existe"}) 
            }

            //comparando se a senha digita e a mesma salva
            bcrypt.compare(senha, usuario.senha, (error, iguais)=>{
                if (iguais) {
                    return done(null, user)
                }else{
                    return done(null, false, {message: "Senha incorreta "})
                }
            })
        })
    }))

    //Salvar usuario em uma sessao
    passaport.serializeUser((usuario, done)=>{
        done(null, usuario.id)
    })

    passaport.deserializeUser((id, done)=>{
        User.findById(id, (err,usuario)=>{
            done(err, user)
        })
    })
}