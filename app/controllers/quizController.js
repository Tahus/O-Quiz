require("dotenv").config();
const {Quiz} = require("../models");

Quiz.findAll({
    include: 'author',
}).then((quizzes) =>{
    console.log(quizzes);
}).catch((error) =>{
    console.log(error);
})

