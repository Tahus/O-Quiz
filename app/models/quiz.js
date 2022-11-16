const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");

class Quiz extends Model {

}

User.init({
  title: DataTypes.STRING,
  description: DataTypes.STRING,
},{
  sequelize,
  tableName: "quiz"
});

module.exports = Quiz;
