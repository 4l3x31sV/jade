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

    User.find({},(err,cruds)=>{
        console.log(JSON.stringify(cruds))
        if(!err){
            res.render("")
        }else {
            res.render("error")
        }
    })
}
module.exports = {
    login,
    buscarUsuarios
}