var express = require("express");
var usrCtrl = require('./controller/userController');
var router = express.Router();

router.route("/usuarios")
.get(usrCtrl.buscarUsuarios)
.post(usrCtrl.insertarUsuario)

router.get("/ejemplo",(req,res)=>{
    res.send("ejemplo")
});
router.route("/usuarios/:id")
.get()
.put()
.delete()
module.exports = router;
/*
/app/ejemplo
/inmuebles/buscar
/vehiculos/buscar
    app.post("/usuarios",()=>....)
    app.get("/usuarios", ()=>....)
    app.put("/usuarios", ()=>....)
    app.delete("/usuarios", ()=>....)
*/

/*
extends ../../layout.jade
block contenido
    div(class="col-md-5 remove-float mx-auto big-top-space")
        form(action="/app/imagenes/#{imagen.id}?_method=PUT", method="POST")

            h1 Subir nueva imagen
            div(class="form-group")
                label(for="nombre") Titulo
                input(type="text", name="nombre", placeholder="Titulo de la Imagen...", id="nombre", class="form-control",
                value="#{usuario.nombre}")

            div(class="row top-space")
                div(class="col-xs-12 col-sm-6")
                    input(type="submit" value="Actualizar" class="btn btn-info")

*/