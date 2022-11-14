require("dotenv").config();
const User = require("../models/user");

User.findAll((error, users) => {
    if (error) {
        //Le controller choisis l'action à faire en cas d'erreur
       console.log( "attention", error);
    }else {
        //si tout est OK le controller log l'instance de User qui a parsé coté Models
        console.log(users);
        //Pour chaque instance, j'exécute sa méthode toString()
        for (const user of users) {
            console.log(user.toString());
            console.log('------');
        };
    }
});

