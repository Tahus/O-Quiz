//Import de la class Client du module pg
const {Client} = require('pg');

//J'instancie la class pour pouvoir me connecter à la bdd
const client = new Client(process.env.PG_URL);

//Connexion à la base
client.connect()

module.exports = client;