const CoreModel = require("./coreModel");
const client = require("../database");

class Answer extends CoreModel {
  #description;
  #question_id;

  constructor(obj) {
    super(obj);
    this.description = obj.description;
    this.question_id = obj.question_id;
  }

  //GETTERS
  get description() {
    return this.#description;
  }

  get question_id() {
    return this.#question_id;
  }

  //SETTERS
  set description(value) {
    this.#description = value;
  }

  set question_id(value) {
    this.#question_id = value;
  }

  static findAll(callback) {
    client.query(`SELECT * FROM "answer"`, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        const answers = [];

        for (const answer of result.rows) {
          answers.push(new Answer(answer));
        }
      }
    });
  }
}

module.exports = Answer;
