const User = require('../model/user').User

function login(req,res){
    console.log(JSON.stringify(User))
    User.findOne({nombre: req.body.user}, (err,user)=>{
        if(err) return res.status(500).render("error");
        if(!user) return res.status(404).render("error")
        req.user = user;
        console.log("A iniciado session")
        res.status(200).render("index")
    })
}
function buscarUsuarios(req,res){
    console.log("Ingresa a la fucion")

    User.find({},(err,usuarios)=>{
        console.log(JSON.stringify(usuarios))
        if(!err){
            res.render("listar-usuarios", {usuarios: usuarios})
        }else {
            res.render("error")
        }
    })
}

function insertarUsuario(req,res){
    var user = new User({
        nombre: req.body.nombre,
        apellido:"Morales",
        fecha: new Date()
    })

    user.save().then((us)=>{
        console.log(JSON.stringify(us))
        res.render("index")
    },(err)=>{
        console.log(JSON.stringify(err))
        res.render("error")
    })
}
module.exports = {
    login,
    buscarUsuarios,
    insertarUsuario
}