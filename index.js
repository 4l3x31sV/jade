var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var methodOverride = require("method-override");
var usrCtrl = require('./controller/userController');

var app = express();
app.set("view engine", "pug");

app.use(bodyParser.json());// para peticiones con formato application/json
app.use(bodyParser.urlencoded({extended:true}));// define con que algoritmo va a hacer el parsing la libreria,cuando es false no puede hacer el parsing de arreglos
app.use(express.static(__dirname + 'public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));

app.get("/", (req,res)=>{
    console.log("Entro al GET")
    res.render("index")
})
app.get("/login", (req,res)=>{
    res.render("inicio-session")
})
app.post("/inicio_session",usrCtrl.login);
app.post("/listar",)
app.listen(3000,()=>{
    console.log("Servidor Inicializado")
})