const sequelize = require('../database');
const { Model, DataTypes } = require('sequelize');

class Level extends Model {

  toString() {
    return `Level : ${this.id} : ${this.name}`;

  }
}

//J'initialise la class avec la méthode static init hérité de la class Model de sequelize
Level.init({
  //Dans cet objet, je définit les propriétés correspondants aux champs en bdd,Je dois préciser leur type avec Datatypes, Pas de clé étrangère  
  name: DataTypes.STRING,
  
}, {
  //Ici j'indique l'instance de sequelize(connexion à la bdd), et le nom de la tableà laquelle l'instance est raccordée.
  sequelize,
  tableName: 'level'
});




module.exports = Level;
