require("dotenv").config();
const Level = require("../models/level");

//La promesse remplace la callback grace à .then
//une fois que findAll() me retourne quelque chose, alors fais ce qu'il y a entre les parenthèse du .then()
Level.findAll()
.then(levels => console.log(levels))
.catch(error => console.log(error));


  





