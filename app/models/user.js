const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");



class User extends Model {

  //La méthode va me retourner une chaine de caractères
  toString() {
    
    return ` \nEmail : ${this.email}
            \nPassword: ${this.password}
            \nFirstname: ${this.firstname}
            \nLastname: ${this.lastname} \n`;
  
  };
  
}

User.init({
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  firstname: DataTypes.STRING,
  lastname:DataTypes.STRING
},{
  sequelize,
  tableName: "user"
});

module.exports = User;
