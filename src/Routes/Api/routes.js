const express = require("express");

const router = express();

//importar los metodos o funciones que realizan las acciones en cada ruta
const controller = require("../../Controllers/userControllers")

// para crear la api 
module.exports = () => {

    router.get('/todos', controller.getUsers); 
    router.post('/todos/:id', controller.getUserbyID)
    router.post('/todos')
    router.put('todos/:id')
    router.delete('todos/:id')
    
    return router
}