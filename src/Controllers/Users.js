const con  = require("../config/database/db")
var parseUrl = require('body-parser');

let encodeUrl = parseUrl.urlencoded({extended: false});

exports.login = encodeUrl , (req,res) =>{  

    const SqlQuery = "SELECT * FROM users";
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



exports.register = encodeUrl, (req, res) => {
    // usar body parser o enviar los datos en una clase creada en model enviar una clase
    // como llegar a enviar los datos del front al servidor la funcion deberia apuntar a la url.
    // enviar la info como clase o json

    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var userName = req.body.userName;
    var password = req.body.password;

    con.connect(function(err) {
        if (err){
            console.log(err);
        };
        // comprobar que el usuario no este registrado anteriormente
        con.query(`SELECT * FROM users WHERE username = '${userName}' AND password  = '${password}'`, function(err, result){
            
            if(err){
                console.log(err);
            };

            if(Object.keys(result).length > 0){
                // aca tengo que controlar el error enviarlo a una pagina 404 o similar
                res.sendFile(__dirname + '/failReg.html');
            }
            else
            {
            //creating user page in userPage function
            function userPage(){
                // creamos una sesion guardamos estos datos para crear la sesion
                req.session.user = {
                    firstname: firstName,
                    lastname: lastName,
                    username: userName,
                    password: password 
                };
                // aca la respuesta debe ser hacia el modulo correspondiente.
                // usaremos doble validacion del lado del cliente y del lado del servidor 
                res.send('terminanoms con exito');
            }

                // Guardamos al nuevo usuario.
                var sql = `INSERT INTO users (firstname, lastname, username, password) VALUES ('${firstName}', '${lastName}', '${userName}', '${password}')`;
                con.query(sql, function (err, result) {
                    if (err){
                        console.log(err);
                    }else{
                        // con la funcion creamos la pagina 
                        userPage();
                    };
                });
        }
        });
    });
};