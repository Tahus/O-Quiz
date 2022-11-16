require("dotenv").config();
const User = require("../models/user");

/*
User.findAll().then(users => {
  console.log(users);
 }).catch(error => {
  console.log(error);
 }); 

 User.findByPk(1).then(users => {
  console.log(users);
 }).catch(error => {
  console.log(error);
 });*/

User.create({
  email: "taha@free.fr",
  password: "12345",
  firstname: "taha",
  lastname: "hass",

}).then((user) => {
  console.log(user);

}).catch((error) => {
    console.log(error);
});
