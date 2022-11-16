require("dotenv").config();
const {Quiz} = require("../models");

Quiz.findAll({
    include: [
        'author',
        'questions'
    ]
}).then((quizzes) =>{
    console.log(quizzes);
}).catch((error) =>{
    console.log(error);
})

