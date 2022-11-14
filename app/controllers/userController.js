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


User.findById(15, (error, user) => {
    if (error) {
        console.log('Attention :', error);
    } else {
        console.log( 'user trouvé!', user.toString());

        user.delete((error, IsDelete) => {
            if (error) {
                console.log(error);
            } else {
                console.log("supprimé!");
            }
        });
    }

});


/*const addUser = new User({
    email: 'tahus@free.com',
    password: '1234',
    firstname: 'taha',
    lastname: 'hassouna'
});

addUser.insert((error, user) =>{
    if (error) {
        console.log('Attention :', error);
    } else {
        console.log('------');
        console.log(addUser.toString());
        console.log('Mon id:', addUser.id);
    }
});*/


User.update(15, (error, user) => {
    if (error) {
        console.log(error);
    } else {
        /*user.lastname = 'Hassouna';
        user.update((error, user) =>{
            if (error) {
                console.log(error);
            } else {
                console.log('------');
                console.log(user.toString());
            }
        });*/
        
    }
});

