const Answer = require('./answer');
const Question = require('./question');
const User = require('./user');
const Level = require('./level');
const Quiz = require('./quiz');
const Tag = require('./tag');


//ASSOCIATIONS 1:N

//User peut rédiger plusieurs Quiz
User.hasMany(Quiz, {
    //as définit le nom de propriété qui contiendra l'instance ou les instance de l'autre class
    as: 'quizzes',
    foreignKey : 'user_id'
});

//Quiz ne possède q'un seul User
Quiz.belongsTo(User, {
    as : 'author',
    foreignKey : 'user_id'
});

Quiz.hasMany(Question, {
    as : 'questions',
    foreignKey: 'quiz_id'
});

Question.belongsTo(Quiz, {
    as: 'quiz',
    foreignKey : 'quiz_id'
});

Level.hasMany(Question, {
    as: 'questions',
    foreignKey : 'level_id'
});

Question.belongsTo(Level, {
    as: 'level',
    foreignKey : 'level_id'
});

Question.hasMany(Answer, {
    as : 'answers',
    foreignKey : 'question_id'
});

Answer.belongsTo(Question, {
    as: 'question',
    foreignKey: 'question_id'
});



//ASSOCIATION 1:1

Question.belongsTo(Answer, {
    as: 'good_answer',
    foreignKey : 'answer_id'
});




//ASSOCIATION N:N

Tag.belongsToMany(Quiz, {
    as: 'quizzes',
    through: 'quiz_has_tag',
    foreignKey : 'tag_id',
    otherKey : 'quiz_id'
});

Quiz.belongsToMany(Tag, {
    as:'tags',
    through: 'quiz_has_tag',
    foreignKey : 'quiz_id',
    otherKey : 'tag_id'
});



module.exports = {Answer, Question, User, Level, Quiz, Tag};