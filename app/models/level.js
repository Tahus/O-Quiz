const CoreModel = require("./coreModel")

class Level extends CoreModel {
    id;
    name;

    //Le constructor : fonction speciale propre à chaque class, qui est appelée lorsqu'on instancie l'objet(new)
    //ici il aura pour but d'initialiser les propriétés de l'objet
    constructor(obj){
        this.id = obj.id;
        this.name = obj.name;
    };
};

//créer un objet à partir d'une class = instancier un objet
const level = new Level({
    
});

module.exports = Level;