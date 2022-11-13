require("dotenv").config();
const User = require("../models/user");

User.findAll((error, users) => {
    if (error) {
       console.log( "attention", error);
    }else {
        console.log(users);
    }
});

