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
 });

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

User.update({
 firstname: "Tahus",
}, {
  where: {
    id: 17
  }
}).then((info) => {
  console.log(info);
}).catch((error) =>{
  console.log(error);
});*/

User.destroy({
  where: {
    id: 17
  }
}).then((log) =>{
  console.log("User supprimé !");

}).catch((error) =>{
  console.log(error);
})

