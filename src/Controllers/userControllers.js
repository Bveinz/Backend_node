const pool  = require("../config/database/db")

exports.getUsers = (req,res) =>{
    
    const SqlQuery = "SELECT * FROM BLOGS";
    
    pool.query (SqlQuery, (error, result, fields ) =>{
        
        if(error){
            res.json({ message : "Error en la Consulta"})
        }
        else
        { 
            res.json ( result )
        }
    })
}

exports.getUserbyID = (req, res) => {

    const SqlQuery = "SELECT * FROM blogs WHERE id=?";
    const id = req.params.id; 
    
    pool.query ( SqlQuery, [id], (error, result, fields) => {
        
        if(error){
            res.json({ message : "Error en la Consulta"})
        }
        else
        { 
            res.json ( result )
        }

    })
}

