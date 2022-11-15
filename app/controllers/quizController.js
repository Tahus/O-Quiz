require("dotenv").config();
const Quiz = require("../models/quiz");

Quiz.findAll((error, quizzes) => {
    if (error) {
        console.log(error);
    } else {
        for (const quiz of quizzes) {
            console.log(quiz);
        };
    }
});