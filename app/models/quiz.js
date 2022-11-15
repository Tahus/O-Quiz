const CoreModel = require("./coreModel");
const client = require("../database");

class Quiz extends CoreModel {

  static tableName ="quiz";

  #title;
  #description;
  #user_id;

  constructor(obj) {
    super(obj);
    this.title = obj.title;
    this.description = obj.description;
    this.user_id = obj.user_id;
  };

  //GETTERS

  get title() {
    return this.#title;
  };

  get description() {
    return this.#description;
  };

  get user_id() {
    return this.#user_id;
  };

  //SETTERS

  set title(value) {
    this.#title = value;
  };

  set description(value) {
    this.#description = value;
  };

  set user_id(value) {
    this.#user_id = value;
  };
}

module.exports = Quiz;
