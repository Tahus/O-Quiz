const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");
class Question extends Model {

  

}

User.init({
  question: DataTypes.STRING,
  anecdote: DataTypes.STRING,
  wiki: DataTypes.STRING
},{
  sequelize,
  tableName: "question"
});


module.exports = Question;
