require("dotenv").config();
const User = require("../models/user");



User.findAll().then(users => {
  console.log(users);
 }).catch(error => {
  console.log(error);
 });