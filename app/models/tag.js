const CoreModel = require("./coreModel");
const client = require("../database");
class Tag extends CoreModel {
  
  static tableName = "tag";

  #name;

  constructor(obj) {
    super(obj);
    this.name = obj.name;
  };

  //GETTERS
  get name() {
    return this.#name;
  };

  //SETTERS

  set name(value) {
    this.#name = value;
  };
};

module.exports = Tag;
