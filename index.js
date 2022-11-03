const express = require("express");
const routes = require("./src/Routes/Routes.js");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const http = require("http");
var parseUrl = require('body-parser');

app = express();

//sesion middleware
app.use(sessions({
    secret: "thisismysecret",
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 60 * 24},
    resave: false
}));

app.use(cookieParser());

app.listen(3001, () =>{
    console.log('Aplicacion Corriendo en el puerto ', 3001)
});


//utilizar las rutas
app.use("/users/", routes())
