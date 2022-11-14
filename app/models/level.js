const CoreModel = require("./coreModel");
const client = require("../database");

class Level extends CoreModel {
  #name;

  //Le constructor : fonction speciale propre à chaque class, qui est appelée lorsqu'on instancie l'objet(new)
  //ici il aura pour but d'initialiser les propriétés de l'objet
  constructor(obj) {
    //j'appelle le constructor de coreModel pour initialiser l'id grâce au mot clef "super"
    super(obj);
    this.#name = obj.name;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    //Je controle le type de la valeur
    if (typeof name !== "string") {
      throw Error("Mauvais typage ! ");
    }
    this.#name = name;
  }

  toString() {
    return `Level : ${this.id} : ${this.#name}`;
  }

  //Mise en place d'ACTIVE RECORD
  //static indique qu'on utilise findAll() sur la class et non pas sur l'instance
  static findAll(callback) {
    //au lieu de renvoyer la callback directement avec le resultat brut,
    //je fais transformer le resultat en instance de class pour après le renvoyer au controller
    client.query(`SELECT * FROM level`, (err, result) => {
      // en cas d'erreur j'appelle la callback en lui passant une erreur
      // en second parametre je renvoies aucun resultat
      if (err) {
        callback(err, null);
      } else {
        //transformer les objets bruts (recuperés en base) en instance de class
        //Avant de tranformer les datas, il faut creer un tableau vide pour accueillir les futures instances
        const levels = [];
        //pour transformer les resultats il va falloir boucler dessus car c'est un tableau
        for (const level of result.rows) {
          /*const levelInst = new Level(level);
             levels.push(levelInst);*/
          levels.push(new Level(level));
        }

        callback(null, levels);
      }
    });
  }

  static findById(id, callback) {
    client.query(`SELECT * FROM level WHERE id = $1`, [id], (error, result) => {
      //si erreur, j'appelle le traitement du controller en lui passant l'erreur
      if (error) {
        callback(error, null);
      } else {
        //sinon il fait une instance du level recuperé en base
        const level = new Level(result.rows[0]);
        //puis il appelle le traitement du controller en lui passant l'instance de level parsé
        callback(null, level);
      }
    });
  };

  //Instertion d'un enregistrement via une methode d'instance classique, car je pars d'une instance déjà faite
  insert(callback) {
    client.query(
      `INSERT INTO level VALUES(DEFAULT, $1) RETURNING id`,
      [this.name],
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
  };

  update(callback) {
    client.query(`UPDATE "level" SET name = $2, WHERE id = $1`, [this.id,this.name], (error, result) =>{
        if (error) {
            callback (error, null);
        } else {
            callback(null, this);
        }
    });
  };

  delete(callback) {
    client.query(`DELETE FROM "level" WHERE id = $1`,[this.id], (error, result) =>{
        if (error) {
            callback(error, null);
        } else {
            callback(null, true);
        }
    });
  };
  
}

module.exports = Level;
