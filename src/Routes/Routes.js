const express = require("express");

const router = express();

//importar los metodos o funciones que realizan las acciones en cada ruta
const controller = require("../Controllers/Users")

// para crear la api 
module.exports = () => {

// un get by id para login.    
    router.get('/login', controller.login)

// un post para registrar al usuario
    router.post('/register', controller.register)

    router.put('todos/:id')
    router.delete('todos/:id')
    
    return router
}