const { MongoClient } = require('mongdb');
const configBD = requere('../configuration/db.config');

const url = `mongdb://${configBD.SERVIDOR}:${configBD.PUERTO}`;

const cliente = new MongoClient(url);

let basedatos;

module.exports = {
    conectar: async function() {
        try {
            await cliente.connect();
            console.log(" se establecio la conexion a la base de datos");
            basedatos = cliente.db(configBD.BASEDATOS);
        }
        catch (error) {
         console.log(error)
        }

    },

    obtenerdb: function(){
        return basedatos;
    }
};