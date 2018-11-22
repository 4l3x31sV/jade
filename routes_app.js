var express = require("express");
var usrCtrl = require('./controller/userController');
var router = express.Router();

router.route("/usuarios")
.get(usrCtrl.buscarUsuarios)
.post(usrCtrl.insertarUsuario)

router.route("/usuarios/:id")
.get()
.put()
.delete()
module.exports = router;
/*
    app.post("/usuarios",()=>....)
    app.get("/usuarios", ()=>....)
    app.put("/usuarios", ()=>....)
    app.delete("/usuarios", ()=>....)
*/

/*
form(action="/app/imagenes/#{imagen.id}?_method=PUT", method="POST")
*/