require("dotenv").config();
const Question = require("../models/question");


//Méthode static donc appel depuis la class elle même
Question.findById(3, (error, question) => {
    if (error) {
        console.log(error);
    } else {
        console.log(question.question);
    }
});