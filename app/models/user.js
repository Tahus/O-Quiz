const CoreModel = require("./coreModel");
const client = require("../database");

class User extends CoreModel {
  #email;
  #password;
  #firstname;
  #lastname;

  //le constructor passe par les setters
  constructor(obj) {
    super(obj);
    this.email = obj.email;
    this.password = obj.password;
    this.firstname = obj.firstname;
    this.lastname = obj.lastname;
  }

  //GETTERS : : Je récupére les valeurs des propriétés privées
  get email() {
    return this.#email;
  }

  get password() {
    return this.#password;
  }

  get firstname() {
    return this.#firstname;
  }

  get lastname() {
    return this.#lastname;
  }

  //SETTERS: Je modifie les valeurs des propriétés privées
  set email(value) {
    this.#email = value;
  }

  set password(value) {
    this.#password = value;
  }

  set firstname(value) {
    this.#firstname = value;
  }

  set lastname(value) {
    this.#lastname = value;
  }

  //La méthode va me retourner une chaine de caractères
  toString() {
    return `Email : ${this.email}
            Password: ${this.password}
            Firstname: ${this.firstname}
            Lastname: ${this.lastname}`;
  }

  //Méthode Active Record

  // callback est la fonction du controller qui attends d'être excécutée
  static findAll(callback) {
    //une fois la requette sql est achevée, alors quelque chose sera exécutée (elle attends une erreur ou un resultat)
    //Je ne veux pas renvoyer les objets en dur donc je les parses
    client.query(`SELECT * FROM "user"`, (error, result) => {
      //en cas d'erreur, j'appelle le traitement du controller en lui passant l'erreur et rien en resultat
      if (error) callback(error, null);
      else {
        // sinon j'effectues le parse: je crée un array dans leqeul je push les instances
        const users = [];
        // pour pouvoir faire un instance sur chaque user je boucle sur le resultat en base de données
        for (const user of result.rows) {
          //Puis, je push dans le tableau une instance représentant l'user actuellement parcouru
          users.push(new User(user));
        }
        //en cas de succès j'effectues le traitement du controller en lui passant le tableau mais pas d'erreur
        callback(null, users);
      }
    });
  }

  static findById(id, callback) {
    client.query(
      `SELECT * FROM "user" WHERE id = $1`,
      [id],
      (error, result) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, new User(result.rows[0]));
        }
      }
    );
  }

  // Méthode d'instance car je veux insérer un enregistrement en base par rapport aux infos de l'instance que j'utilise
  // Donc je vais appeler la méthode dessus grâce aux infos que j'ai donné à l'instance, ainsi je vais pouvoir m'en servir pour enregistrer les infos dans la bdd
  insert(callback) {
    client.query(
      `INSERT INTO "user" (email, password, firstname, lastname) VALUES($1, $2, $3, $4) RETURNING id`,
      [this.email, this.password, this.firstname, this.lastname],
      (error, result) => {
        if (error) {
          callback(error, null);
        } else {
          //Je mets à jour l'id de l'instance courante
          this.id = result.rows[0].id;
          callback(null, this);
        }
      }
    );
  };

   // Méthode d'instance pour mettre à jour les infos de la bdd
   update(callback) {
    client.query(`UPDATE "user" SET email = $2, password = $3, firstname = $4, lastname = $5 WHERE id = $1`, [this.id,this.email, this.password, this.firstname, this.lastname], (error, result) =>{
        if (error) {
            callback (error, null);
        } else {
            callback(null, this);
        }
    });
  };

  delete(callback) {
    client.query(`DELETE FROM "user" WHERE id = $1`,[this.id], (error, result) =>{
        if (error) {
            callback(error, null);
        } else {
            callback(null, true);
        }
    });
  };
}

module.exports = User;
