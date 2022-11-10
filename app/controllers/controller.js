require('dotenv').config();
const Level = require('../models/level');

//J'appelle la méthode AR de Level

Level.findAll((error, levels) => {
    if (error) {
        console.log(error);
    }else {
     console.log(levels);   
    }
});