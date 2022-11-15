const CoreModel = require("./coreModel");


class Level extends CoreModel {

  //je donne une propriété static à ma class pour récupérer le nom de la table bdd
  static tableName = "level";

  //La propriété
  name;

  //Le constructor : fonction speciale propre à chaque class, qui est appelée lorsqu'on instancie l'objet(new)
  //ici il aura pour but d'initialiser les propriétés de l'objet
  constructor(obj) {
    //j'appelle le constructor de coreModel pour initialiser l'id grâce au mot clef "super"
    super(obj);
    this.name = obj.name;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    //Je controle le type de la valeur
    if (typeof name !== "string") {
      throw Error("Mauvais typage ! ");
    }
    this.name = name;
  }

  toString() {
    return `Level : ${this.id} : ${this.name}`;
  }

  //Mise en place d'ACTIVE RECORD
  
  //static indique qu'on utilise findAll() sur la class et non pas sur l'instance
  
 

  

 


  
  
}

module.exports = Level;
