var express = require("express");
var usrCtrl = require('./controller/userController');
var router = express.Router();

router.route("/usuarios")
.get(usrCtrl.buscarUsuarios)
.post(usrCtrl.insertarUsuario)

module.exports = router;
/*
    app.post("/usuarios",()=>....)
    app.get("/usuarios", ()=>....)
    app.put("/usuarios", ()=>....)
    app.delete("/usuarios", ()=>....)
*/