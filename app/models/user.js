const CoreModel = require("./coreModel");


class User extends CoreModel {

  static tableName ="user";

  email;
  password;
  firstname;
  lastname;

  //le constructor passe par les setters
  constructor(obj) {
    super(obj);
    this.email = obj.email;
    this.password = obj.password;
    this.firstname = obj.firstname;
    this.lastname = obj.lastname;
  };

  //GETTERS : : Je récupére les valeurs des propriétés privées
  get email() {
    return this.email;
  };

  get password() {
    return this.password;
  };

  get firstname() {
    return this.firstname;
  };

  get lastname() {
    return this.lastname;
  };

  //SETTERS: Je modifie les valeurs des propriétés privées
  set email(value) {
    this.email = value;
  };

  set password(value) {
    this.password = value;
  };

  set firstname(value) {
    this.firstname = value;
  };

  set lastname(value) {
    this.lastname = value;
  };

  //La méthode va me retourner une chaine de caractères
  toString() {
    return `Email : ${this.email}
            Password: ${this.password}
            Firstname: ${this.firstname}
            Lastname: ${this.lastname}`;
  };

  //Méthode Active Record

  // callback est la fonction du controller qui attends d'être excécutée
  //  }else {
        // sinon j'effectues le parse: je crée un array dans leqeul je push les instances
        // }
    //});
  //}

  

  

   


}

module.exports = User;
