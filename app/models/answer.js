const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");

class Answer extends Model {



}

User.init({
  description: DataTypes.STRING,
  
},{
  sequelize,
  tableName: "answer"
});


module.exports = Answer;
