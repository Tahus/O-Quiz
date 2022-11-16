const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");

class Answer extends Model {



}

Answer.init({
  description: DataTypes.STRING,
  
},{
  sequelize,
  tableName: "answer"
});


module.exports = Answer;
