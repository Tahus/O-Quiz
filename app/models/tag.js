const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");
class Tag extends Model {

  
};

User.init({
  name: DataTypes.STRING
},{
  sequelize,
  tableName: "tag"
});

module.exports = Tag;
