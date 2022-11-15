const sequelize = require("../database");
const { Model, Datatypes } = require("sequelize");

class Level extends Model {



  toString() {
    return `Level : ${this.id} : ${this.name}`;
  };
}


//J'initialise la class avec la méthode static init hérité de la class Model de sequelize
Level.init({
    //Dans cet objet, je définit les propriétés correspondants aux champs en bdd
    //Je dois préciser leur type avec Datatypes
    name: Datatypes.STRING
}, {
    //Ici j'indique l'instance de sequelize(connexion à la bdd), et le nom de la tableà laquelle l'instance est raccordée.
    sequelize,
    tableName: "Level"
});

module.exports = Level;
