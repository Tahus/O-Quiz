const client = require("../database");

//coreModel est une class abstraite car elle ne sera jamais instanciée, elle est uniquement vouée à l'heritage
class CoreModel {
  //Afin de respecter le principe d'encapsulation,je rends les propriétés "privés" avec le "#" et donc pas disponibles en dehors des class
  #id;

  //Le constructor : fonction speciale propre à chaque class, qui est appelée lorsqu'on instancie l'objet(new)
  //ici il aura pour but d'initialiser les propriétés de l'objet
  constructor(obj) {
    this.#id = obj.id;
  }

  //GETTER : return la valeur de la propriété id

  get id() {
    return this.#id;
  }

  //SETTER : modifie la valeur de la propriété id
  set id(id) {
    this.#id = id;
  }

  //Active Record

  // callback est la fonction du controller qui attends d'être excécutée
  static findAll(callback) {
    client.query(`SELECT * FROM "${this.tableName}"`, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        const instances = [];

        for (const instance of result.rows) {
          instances.push(new this(instance));
        }

        callback(null, instances);
      }
    });
  }

  static findById(id, callback) {
    client.query(
      `SELECT * FROM "${this.tableName}" WHERE id = $1`,
      [id],
      (error, result) => {
        if (error) {
          callback(error, null);
        } else {
          //ici, this sera remplacé par le "vrai" nom de la class appelé dans le controller
          callback(null, new this(result.rows[0]));
        }
      }
    );
  }

  //Instertion d'un enregistrement via une methode d'instance classique, car je pars d'une instance déjà faite
  insert(callback) {
    //ici je ne suis plus dans une méthode static, je dois donc récupérer la class à partir d'une instance, ainsi que les champs

    //Je dois dynamiser la requête SQL
    //le tableau properties va accueillir les champs liées à la class que je manipule
    const properties = [];
    //le tableau values va contenir les differentes valeurs des propriétés que je vais passer sous forme de tableau à la requête SQL (requête préparée)
    const values = [];
    //le tableau valuesCount va contenir les $X incrémentés en fonction du nombre des champs
    const valuesCount = [];
    //Je crée également un compteur que j'initialise à 1, il va servir pour les $1,$2 etc..
    let count = 0;

    //Je fais une boucle for in afin de récupérer les propriétés de la class appelante
    for (const prop in this) {
      const property = prop;
      //si je passe sur l'id je ne veut pas l'insérer dans le tableau des champs, car il sera géré automatiquement par la bdd
      if (prop === "#id") continue; //continue permet d'ignorer la prop #id

      //j'insére la propriété dans le tableau properties sans la #
      properties.push(`"${property}"`);

      //j'incère le compteur des $ qui s'incrémente à chaque tour de boucle
      valuesCount.push(`$${++count}`);

      // j'incère la valeur de la propriété parcourue dans le tableau values.
      values.push(this[property]);
    }
    console.log("properties:", properties);
    console.log("le compteur:", valuesCount);
    console.log("les values:", values);

    //Pour le nom de tables,j'utilise la propriété constructor car elle contient la class, sachant que je suis dans une méthode d'instance
    client.query(
      `INSERT INTO "${this.constructor.tableName}"(${properties}) VALUES(${valuesCount}) RETURNING id`,
      values,
      (error, result) => {
        if (error) {
          callback(error, null);
        } else {
          //je mets à jour l'id de l'instance pour le faire correspondre à celui de la base
          //(qui a été généré après l'insertion, rendu dispo avec RETURNING)
          this.id = result.rows[0].id;
          callback(null, this);
        }
      }
    );
  }

  update(callback) {
    //Va accueillir les differents champs = $X
    const properties = [];
    //Va accueillir les differentes valeurs des champs
    const values = [this.id];
    let count = 1;

    for (const prop in this) {
      properties.push(`"${prop}"=$${++count}`);
      values.push(this[prop]);
    }

    client.query(
      `UPDATE "${this.constructor.tableName}" SET ${properties} WHERE id = $1`,
      values,
      (error, result) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, this);
        }
      }
    );
  }

  delete(callback) {
    client.query(
      `DELETE FROM "${this.constructor.tableName}" WHERE id = $1`,
      [this.id],
      (error, result) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, true);
        }
      }
    );
  };

  static findBy(params,callback) {
    const filters = [];
    
    const values = []

    let count = 0;
    //for in va boucler sur le nom des propriétés et non pas leurs valeurs
    for (const param in params) {
     filters.push(`"${param}" = $${++count}`);
     //j'incère la valeur (params) de la propriété (param)
     values.push(params[param]);
    }

    client.query(`SELECT * FROM "${this.tableName}" WHERE ${filters.join(' OR ')}`, values, (error, result) =>{
      if (error) {
        callback(error, null);
      } else {
        const instances = [];
        for (const data of result.rows) {

          instances.push(new this(data));
        }
        callback(null, instances);
      }
    })
  };
}

module.exports = CoreModel;
