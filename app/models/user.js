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
    this.#lastname;
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


  //Méthode Active Record

  // callback est la fonction du controller qui attends d'être excécutée
 static findAll(callback) {
    //une fois la requette sql est achevée, alors quelque chose sera exécutée (elle attends une erreur ou un resultat)
    //Je ne veux pas renvoyer les objets en dur donc je les parses
    client.query(`SELECT * FROM "user"`, (error, result) => {

        //en cas d'erreur, j'appelle le traitement du controller en lui passant l'erreur et rien en resultat
        if(error) callback(error, null);
        else{
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
    })

    
        
    
 }


}

module.exports = User;

