const CoreModel = require("./coreModel");
const client = require("../database");

class User extends CoreModel {
  #email;
  #password;
  #firstname;
  #lastname;

  constructor(obj) {
    super(obj);
    this.email = obj.email;
    this.password = obj.password;
    this.firstname = obj.firstname;
    this.lastname = obj.lastname;
  }

  //GETTERS
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

  //SETTERS
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

 static findAll(callback) {
    client.query(`SELECT * FROM "user"`, (error, result) => {
        if(error) callback(error, null);
        else{
            const users = [];
            for (const user of result.rows) {
                users.push(new User(user));
            }
            callback(null, users);
        }
    })

    
        
    
 }


}

module.exports = User;

