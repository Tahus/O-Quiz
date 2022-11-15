require("dotenv").config();
const User = require("../models/user");

/*User.findAll((error, users) => {
    if (error) {
        console.log(error);
    } else {
        for (const user of users) {
            console.log("----------");
            console.log(users.toString());   
        }  
    }
});*/

User.findBy({
    email: 'chuck@oclock.io'
}, (error, users) => {
    if (error) {
        console.log(error);
    } else {
        console.log(users);
    }
});
