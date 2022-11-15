require("dotenv").config();
const User = require("../models/user");

/*


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
});


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
        })
        
    }
});*/

/*User.findAll((error, users) => {
    if (error) {
        console.log(error);
    } else {
        for (const user of users) {
            console.log("les users :", user);
        };
    }
});

User.findById(1, (error, user) => {
    if (error) {
        console.log(error);
    } else {
        console.log( user.toString());
    }
});*/

/*const myUser = new User({
    email: 'khaled@free.fr',
    password: 'azerty',
    firstname: 'khaled',
    lastname: 'hass'
});

myUser.insert((error, user) =>{
    if (error) {
        console.log(error);
    } else {
        console.log(myUser.toString());
    }
});

User.findById(7, (error, user) => {
  if (error) {
    console.log(error);
  } else {
    user.firstname = "Damien";
    user.update((error, user) => {
      if (error) {
        console.log(error);
      } else {
        console.log(user.toString());
      }
    });
  }
});*/

User.findById(16, (error, user) => {
    if (error) {
        console.log(error);
    } else {
        user.delete((error, user) =>{
            if (error) {
                console.log(error);
            } else {
                console.log("User effacé!");
            }
        });
    }

});
