const CoreModel = require("./coreModel");

class Level extends CoreModel {
  #name;

  //Le constructor : fonction speciale propre à chaque class, qui est appelée lorsqu'on instancie l'objet(new)
  //ici il aura pour but d'initialiser les propriétés de l'objet
  constructor(obj) {
    //j'appelle le constructor de coreModel pour initialiser l'id
    super(obj);
    this.#name = obj.name;
  }

  get name() {
    return this.#name;
  };

  set name(name) {
    //Je controle le type de la valeur
    if (typeof name !== 'string'){
        throw Error ("Mauvais typage ! ");
    }
    this.#name = name;
  };

  toString() {
    return `Level : ${this.id} : ${this.#name}`;
  };

}

//créer un objet à partir d'une class = instancier un objet
const facile = new Level({
  id: 3,
  name: "moyen",
});


facile.name = "Moyen";
console.log(facile.name);
module.exports = Level;
