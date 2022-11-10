
//coreModel est une class abstraite car elle ne sera jamais instanciée, elle est uniquement vouée à l'heritage
class CoreModel {
    //Afin de respecter le principe d'encapsulation,je rends les propriétés "privés" avec le "#" et donc pas disponibles en dehors des class
    #id;
    

    //Le constructor : fonction speciale propre à chaque class, qui est appelée lorsqu'on instancie l'objet(new)
    //ici il aura pour but d'initialiser les propriétés de l'objet
    constructor(obj){
        this.#id = obj.id;
    };

    //GETTER : return la valeur de la propriété id

    get id(){
        return this.#id;
    }

    //SETTER : modifie la valeur de la propriété id
    set id(id){
       
       this.#id = id;
    }
};


module.exports = CoreModel;